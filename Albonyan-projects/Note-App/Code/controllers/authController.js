import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";
import attachCookie from "../utils/attachCookie.js";
import sendgridMail from "@sendgrid/mail";
sendgridMail.setApiKey(process.env.SENDGRIDAPI);

const signUp = async (req, res) => {
  const { email, password, name, phone, birthdayYear } = req.body;

  if (!email || !password || !name) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({
    email,
    password,
    name,
    phone: phone || "",
    birthdayYear: birthdayYear || "",
  });

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      birthdayYear: user.birthdayYear,
    },
  });
  const emailMessage = {
    to: email,
    from: "yournotesapplication@gmail.com",
    subject: "Signup Succeeded",
    html: `<h1>Hi ${name}</h1><br /><br /><h3>You Have Successfully Signed Up!</h3>`,
  };
  sendgridMail.send(emailMessage);
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please enter all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Email");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Password");
  }

  const token = user.createJWT();
  attachCookie({ res, token });
  user.password = undefined;

  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      name: user.name,
      phone: user.phone,
      birthdayYear: user.birthdayYear,
    },
  });
};

const updateUser = async (req, res) => {
  const { email, password, name, phone, birthdayYear } = req.body;
  if (!email || !password || !name) {
    throw new BadRequestError("Please Enter all values");
  }
  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.password = password;
  user.name = name;
  user.phone = phone || "";
  user.birthdayYear = birthdayYear || "";

  await user.save();

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({
    user: {
      email,
      name,
      phone,
      birthdayYear,
    },
  });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now() + 1000),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};

export { signUp, login, updateUser, getCurrentUser, logout };
