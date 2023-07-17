import { useState, useEffect } from "react";
import classes from "../assets/css/SignUp.module.css";
import { useAppContext } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormRow from "../components/FormRow.js";
import Alert from "../components/Alert";
import LangBtn from "../components/LanguageBtn";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  birthdayYear: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const { setupUser, user, isProcessing, showAlert, displayAlert, language } =
    useAppContext();
  const [submit, setSubmit] = useState(false);

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const completeSignUp = () => {
    const { email, password, confirmPassword } = values;
    if (!email || !password || !confirmPassword) {
      displayAlert("Please Enter All Values!");
      return;
    }

    if (+password.trim().length < 6) {
      displayAlert("Please Enter at least 6 characters");
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      displayAlert("passwords dons't match");
      return;
    }
    setSubmit(!submit);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isProcessing) {
      return;
    }
    const { name, email, password, confirmPassword, phone, birthdayYear } =
      values;
    if (!name) {
      displayAlert("please enter a name");
      return;
    }

    const currentUser = {
      name,
      email,
      password,
      confirmPassword,
      phone,
      birthdayYear,
    };
    setupUser({
      currentUser,
      endPoint: "signUp",
      alertText: "User Created Successfully",
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <section
      className={classes.container}
      style={{ direction: `${language === "ar" ? "rtl" : "ltr"}` }}
    >
      <div className={classes.backgroundImg}>
        <div className={classes.PageLogo}>
          <span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0909 4.77L12.4945 21.9L6.32727 15.54L8.37818 13.425L12.4945 17.67L27.04 2.67L29.0909 4.77ZM14.5455 27C8.13091 27 2.90909 21.615 2.90909 15C2.90909 8.385 8.13091 3 14.5455 3C16.8291 3 18.9673 3.69 20.7709 4.875L22.88 2.7C20.5091 1.005 17.6436 0 14.5455 0C6.51636 0 0 6.72 0 15C0 23.28 6.51636 30 14.5455 30C17.0618 30 19.4327 29.34 21.4982 28.17L19.3164 25.92C17.8618 26.61 16.2473 27 14.5455 27ZM24.7273 19.5H20.3636V22.5H24.7273V27H27.6364V22.5H32V19.5H27.6364V15H24.7273V19.5Z"
                fill="#ffffff"
              />
            </svg>
          </span>
          <h3>Your Notes</h3>
        </div>
        <LangBtn className={classes.langbtn} />
      </div>
      <form className="form">
        <h1>{t("sign.title")}</h1>
        {!submit && [
          <FormRow
            key={1}
            name="email"
            type="email"
            value={values.email}
            handleChange={changeHandler}
            labelText={t("sign.email")}
          />,
          <FormRow
            key={2}
            name="password"
            type="password"
            value={values.password}
            handleChange={changeHandler}
            labelText={t("sign.password")}
          />,
          <FormRow
            key={3}
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            handleChange={changeHandler}
            labelText={t("sign.confirmPassword")}
          />,
        ]}
        {submit && [
          <FormRow
            key={1}
            name="name"
            type="text"
            handleChange={changeHandler}
            value={values.name}
            labelText={t("sign.name")}
          />,
          <FormRow
            key={2}
            name="phone"
            type="phone"
            value={values.phone}
            handleChange={changeHandler}
            labelText={t("sign.phone")}
          />,
          <FormRow
            key={3}
            name="birthdayYear"
            type="year"
            value={values.birthdayYear}
            handleChange={changeHandler}
            labelText={t("sign.birth")}
          />,
        ]}

        {showAlert && <Alert />}
        {submit && (
          <button onClick={submitHandler} className="btn btn-block submitBtn">
            {t("sign.submit")}
          </button>
        )}
        {
          <button
            type="button"
            className={submit ? "btn btn-block backBtn" : "btn btn-block"}
            onClick={completeSignUp}
          >
            {submit && language === "ar" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
            {submit && (language === "en" || "en-EG") && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            )}
            {submit ? t("sign.back") : t("sign.complete")}
            {!submit && (language === "en" || "en-EG") && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            )}
            {!submit && language === "ar" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            )}
          </button>
        }
        <p className="signUpText">
          {t("sign.have")}
          <Link to={"/login"} className="loginLink">
            {t("sign.login")}
          </Link>
        </p>
      </form>
    </section>
  );
};

export default SignUp;
