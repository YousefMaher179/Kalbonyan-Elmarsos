import { useAppContext } from "../context/appContext";

const Alert = ({ customClass }) => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType} ${customClass}`}>{alertText}</div>
  );
};

export default Alert;
