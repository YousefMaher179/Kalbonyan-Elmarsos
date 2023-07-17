import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const UserCard = () => {
  const { t } = useTranslation();
  const { language, mode, user, showUserInfo, logoutUser } = useAppContext();

  const navigate = useNavigate();
  const navigateToUserInfo = () => {
    showUserInfo();
    navigate("/userInfo");
  };

  const logoutHandler = () => {
    logoutUser();
    showUserInfo();
    navigate("/");
  };

  return (
    <div
      className={
        language === "ar"
          ? "userCard left"
          : "userCard" && mode === "dark"
          ? "userCard dark"
          : "userCard"
      }
    >
      {user && [
        <p key={1} className="userWelcome">
          {t("userCard.hi")}
          {user.name}
        </p>,
        <button
          key={2}
          onClick={navigateToUserInfo}
          className={
            mode === "dark"
              ? "btn btn-block modifyBtn dark"
              : "btn btn-block backBtn modifyBtn"
          }
        >
          {t("userCard.editBtn")}
        </button>,
        <button
          key={3}
          onClick={logoutHandler}
          className="btn btn-block logoutBtn"
        >
          <Link style={{ textDecoration: "none", color: "#ffffff" }} to={"/"}>
            {t("userCard.logout")}
          </Link>
        </button>,
      ]}
      {!user && (
        <button className="btn btn-block">
          <Link
            style={{ textDecoration: "none", color: "#ffffff" }}
            to={"/login"}
          >
            {t("userCard.login")}
          </Link>
        </button>
      )}
    </div>
  );
};

export default UserCard;
