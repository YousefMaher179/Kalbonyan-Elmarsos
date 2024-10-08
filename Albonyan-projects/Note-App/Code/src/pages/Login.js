import { useState, useEffect } from "react";
import classes from "../assets/css/SignUp.module.css";
import { useAppContext } from "../context/appContext";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormRow from "../components/FormRow.js";
import Alert from "../components/Alert";
import LangBtn from "../components/LanguageBtn";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const { t } = useTranslation();
  const {
    user,
    setupUser,
    isProcessing,
    showAlert,
    alertText,
    language,
    displayAlert,
  } = useAppContext();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (!email || !password) {
      displayAlert("Please Enter All Values!");
      return;
    }

    const currentUser = { email, password };

    setupUser({
      endPoint: "login",
      currentUser,
      alertText: "User Login Successfully.",
    });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 300);
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
      <form className="form" onSubmit={loginHandler}>
        <h1>{t("sign.login")}</h1>
        {[
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
            handleChange={changeHandler}
            labelText={t("sign.password")}
          />,
        ]}

        {showAlert && <Alert />}
        {
          <button className="btn btn-block" disabled={isProcessing}>
            {t("sign.submit")}
          </button>
        }

        <p className="signUpText">
          {t("sign.dhave")}
          <Link to={"/signUp"} className="loginLink">
            {t("sign.signup")}
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
