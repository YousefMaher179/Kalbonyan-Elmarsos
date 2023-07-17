import { useAppContext } from "../context/appContext.js";
import { useTranslation } from "react-i18next";
import FormRow from "../components/FormRow.js";
import { useState, useEffect } from "react";
import Loading from "../components/Loading.js";
import NavBar from "../components/NavBar.js";
import UserCard from "../components/UserCard.js";
import Alert from "../components/Alert.js";

const UserInfo = () => {
  const {
    userLoading,
    user,
    editUser,
    isProcessing,
    displayAlert,
    mode,
    language,
    showUserCard,
    showAlert,
  } = useAppContext();

  const { t } = useTranslation();

  const initialState = {
    email: `${user && user.email}`,
    password: ``,
    name: `${user && user.name}`,
    phone: `${user && user.phone}`,
    birthdayYear: `${user && user.birthdayYear} `,
  };
  const [newValues, setNewValues] = useState(initialState);

  const userInfoHandler = (e) => {
    setNewValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    setNewValues(initialState);
  }, [user]);

  if (userLoading) {
    return <Loading center />;
  }

  const editUserHandler = (e) => {
    e.preventDefault();
    if (isProcessing) {
      return;
    }
    const { email, password, name, phone, birthdayYear } = newValues;

    // console.log(userInfo)
    if (!email || !password || !name) {
      displayAlert(t("userInfo.msg"), t("userInfo.error"));
      return;
    }

    editUser({
      email,
      password,
      name,
      phone: phone || "",
      birthdayYear: birthdayYear || "",
    });
  };

  return (
    <section
      className={mode === "dark" ? "home2 dark" : "home2"}
      style={{ direction: `${language === "ar" ? "rtl" : "ltr"}` }}
    >
      <NavBar />
      {showUserCard && <UserCard />}
      {showAlert && <Alert customClass="custom" />}
      <img
        src={`/images/${
          mode === "dark" ? "header-dark.png" : "header-light.jpg"
        }`}
        className="headerImg"
      />
      <main className="mainSection">
        <h2
          className={mode === "dark" ? "userInfoHeader dark" : "userInfoHeader"}
        >
          {t("userInfo.title")}
        </h2>

        <form
          className={mode === "dark" ? "userInfoFrom dark" : "userInfoFrom"}
          onSubmit={editUserHandler}
        >
          <div className="userInfoFormContainer dark">
            <FormRow
              name="email"
              type="email"
              value={newValues.email}
              handleChange={userInfoHandler}
              labelText={`${t("userInfo.email")}`}
              dark={mode === "dark" ? "dark" : ""}
            />

            <FormRow
              name="password"
              labelText={`${t("userInfo.password")}`}
              type="password"
              handleChange={userInfoHandler}
              value={newValues.password}
              placeholder={`${t("userInfo.placeholerPassword")}`}
              dark={mode === "dark" ? "dark" : ""}
            />

            <FormRow
              name="name"
              type="text"
              value={newValues.name}
              handleChange={userInfoHandler}
              labelText={`${t("userInfo.name")}`}
              dark={mode === "dark" ? "dark" : ""}
            />

            <FormRow
              name="phone"
              type="text"
              labelText={`${t("userInfo.phone")}`}
              value={newValues.phone}
              handleChange={userInfoHandler}
              dark={mode === "dark" ? "dark" : ""}
            />

            <FormRow
              name={"birthdayYear"}
              labelText={`${t("userInfo.birth")}`}
              type={"text"}
              value={newValues.birthdayYear}
              handleChange={userInfoHandler}
              dark={mode === "dark" ? "dark" : ""}
            />
          </div>
          {showAlert && <Alert />}
          <button type="submit" className="btn btn-block btnnn">
            {t("userInfo.submit")}
          </button>
        </form>
      </main>
    </section>
  );
};

export default UserInfo;
