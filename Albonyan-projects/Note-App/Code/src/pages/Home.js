import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/appContext";
import Note from "../components/Note.js";
import NavBar from "../components/NavBar.js";
import Alert from "../components/Alert";
import UserCard from "../components/UserCard";

const Home = () => {
  const [filter, setFilter] = useState("");
  const { t } = useTranslation();
  const {
    notes,
    active,
    addNote,
    clearCompleted,
    user,
    isProcessing,
    displayAlert,
    mode,
    showAlert,
    language,
    showUserCard,
  } = useAppContext();

  const initialNewState = {
    content: "",
    state: false,
  };

  const [newNote, setNewNote] = useState(initialNewState);

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (!user) {
      displayAlert(`${t("dashboard.msg")},${t("dashboard.error")}`);
      return;
    }
    if (isProcessing) {
      return;
    }
    const { content, state } = newNote;
    if (!content) {
      displayAlert(`${t("dashboard.msgAdd")}`, `${t("dashboard.error")}`);
      return;
    }
    addNote(content, state);
    setNewNote(initialNewState);
  };

  return (
    <section
      className={mode === "dark" ? "home dark" : "home"}
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
        <form onSubmit={addNoteHandler} className="formNote">
          <div
            className={
              mode === "dark" ? "addNoteContainer dark" : "addNoteContainer"
            }
          >
            <span
              className={
                newNote.state
                  ? "stateBtn bg"
                  : "stateBtn" && mode === "dark"
                  ? "stateBtn dark"
                  : "stateBtn"
              }
              onClick={() => {
                setNewNote((prevState) => {
                  return {
                    content: prevState.content,
                    state: !prevState.state,
                  };
                });
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
            <input
              className={mode === "dark" ? "noteInput dark" : "noteInput"}
              type="text"
              name="noteName"
              placeholder={`${t("dashboard.add")}`}
              value={newNote.content}
              onChange={(e) => {
                setNewNote({
                  state: newNote.state,
                  content: e.target.value,
                });
              }}
              required={true}
            />
            <button type="submit" className="addNote">
              <svg
                width="36"
                height="36"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="addNoteBtn"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </form>
        {!notes.length > 0 && (
          <span className={mode === "dark" ? "notesPlace dark" : "notesPlace"}>
            {t("dashboard.empty")}
          </span>
        )}

        {notes.length > 0 && (
          <div className="notesContainer">
            {notes.map((note, index) => {
              if (filter === "active" && note.state) {
                return;
              }
              if (filter === "complete" && !note.state) return;
              return (
                <Note
                  key={note._id}
                  id={note._id}
                  content={note.content}
                  state={note.state}
                />
              );
            })}

            <div
              className={
                mode === "dark"
                  ? "dashboardContainer dark"
                  : "dashboardContainer"
              }
            >
              <span className="remainText">
                {active} {t("dashboard.remain")}
              </span>
              <div
                className={mode === "dark" ? "allButtons dark" : "allButtons"}
              >
                <button
                  className={`allBtn ${mode === "dark" ? "dark" : ""} ${
                    filter === "" ? "text-primary" : ""
                  }
                                `}
                  onClick={() => setFilter("")}
                >
                  {t("dashboard.all")}
                </button>
                <button
                  className={` activeBtn
                ${mode === "dark" ? "dark" : ""} ${
                    filter === "active" ? "text-primary" : ""
                  }
                                `}
                  onClick={() => setFilter("active")}
                >
                  {t("dashboard.active")}
                </button>
                <button
                  className={` completedBtn
                ${mode === "dark" ? "dark" : ""} ${
                    filter === "complete" ? "text-primary" : ""
                  }
                                `}
                  onClick={() => setFilter("complete")}
                >
                  {t("dashboard.completed")}
                </button>
              </div>

              <button
                className={mode === "dark" ? "clearBtn dark" : "clearBtn"}
                disabled={isProcessing}
                onClick={() => {
                  if (!user) {
                    displayAlert(
                      `${t("dashboard.msg")}`,
                      `${t("dashboard.error")}`
                    );
                    return;
                  }
                  clearCompleted();
                }}
              >
                {t("dashboard.clear")}
              </button>
            </div>
          </div>
        )}
      </main>
    </section>
  );
};

export default Home;
