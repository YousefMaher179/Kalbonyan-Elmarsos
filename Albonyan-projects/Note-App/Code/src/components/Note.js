import { useAppContext } from "../context/appContext";
import { useTranslation } from "react-i18next";

const Note = ({ id, state, content }) => {
  const { t } = useTranslation();
  const { user, deleteNote, updateNote, isProcessing, displayAlert, mode } =
    useAppContext();
  return (
    <div
      id={id}
      className={mode === "dark" ? "noteContainer dark" : "noteContainer"}
    >
      <div className="noteContentDiv">
        <span
          className={
            state
              ? "stateBtn bg"
              : "stateBtn" && mode === "dark"
              ? "stateBtn dark"
              : "stateBtn"
          }
          disabled={isProcessing}
          onClick={() => {
            if (!user) {
              displayAlert(`${t("dashboard.msg")}`, `${t("dashboard.error")}`);
              return;
            }
            updateNote(id, !state);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={mode === "dark" ? "stateIcon dark" : "stateIcon"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <p
          className={
            state
              ? "noteContent completed"
              : "noteContent" && mode === "dark"
              ? "noteContent dark"
              : "noteContent"
          }
        >
          {content}
        </p>
      </div>
      <button
        className="deleteNoteBtn"
        onClick={() => {
          if (!user) {
            displayAlert(`${t("dashboard.msg")}`, `${t("dashboard.error")}`);
            return;
          }
          deleteNote(id);
        }}
        disabled={isProcessing}
      >
        <svg
          width="32"
          height="32"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="deleteIcon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default Note;
