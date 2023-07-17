import { useAppContext } from "../context/appContext.js";

const LangBtn = ({ className }) => {
  const { language, changeLang } = useAppContext();
  return (
    <button className={className} onClick={() => changeLang()}>
      {language === "ar" ? "En" : "Ar"}
    </button>
  );
};

export default LangBtn;
