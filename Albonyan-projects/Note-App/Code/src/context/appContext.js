import React, { useReducer, useEffect, useContext } from "react";
import reducer from "./reducer.js";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  CHANGE_LANGUAGE,
  CHANGE_MODE,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  SHOW_USER_CARD,
  EDIT_USER_BEGIN,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  LOGOUT_USER,
  GET_NOTES_SUCCESS,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from "./actions.js";

const language = localStorage.getItem("i18nextLng");
const mode = localStorage.getItem("mode");
let notes = localStorage.getItem("notes");
const active = localStorage.getItem("active");

const initialState = {
  isLoading: false,
  isProcessing: false,
  language: language || "en",
  mode: mode || "light",
  user: null,
  showALert: false,
  alertText: "",
  alertType: "",
  notes: notes ? JSON.parse(notes) : [],
  active: active || 0,
  showUserCard: false,
  userLoading: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [t, i18n] = useTranslation();

  //axios setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );
  //axios setup end here
  //************************************************************** */

  //setup language

  const changeLang = () => {
    const nextLanguage = state.language === "ar" ? "en" : "ar";

    const stateLanguage = localStorage.getItem("i18nextLng");
    if (!stateLanguage) {
      localStorage.setItem("i18nextLng", nextLanguage);
    } else {
      localStorage.removeItem("i18nextLng");
      localStorage.setItem("i18nextLng", nextLanguage);
    }

    i18n.changeLanguage(nextLanguage).then(() => {
      dispatch({ type: CHANGE_LANGUAGE, payload: { language: nextLanguage } });
    });
  };

  //setup language ed here

  //setup darkmode

  const changeMode = () => {
    const mode = state.mode === "dark" ? "light" : "dark";

    const stateLanguage = localStorage.getItem("i18nextLng");
    if (!stateLanguage) {
      localStorage.setItem("mode", mode);
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", mode);
    }

    dispatch({ type: CHANGE_MODE, payload: { mode } });
  };

  //setup mode end here

  const displayAlert = (alertText) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { alertText },
    });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  //setup user
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });

    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user } = data;
      dispatch({ type: SETUP_USER_SUCCESS, payload: { user, alertText } });
    } catch (err) {
      console.log(err);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: {
          msg: err.response.data.msg,
        },
      });
    }
    clearAlert();
  };

  //edit user
  const editUser = async (currentUser) => {
    dispatch({ type: EDIT_USER_BEGIN });

    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user } = data;
      console.log(user);
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: { user },
      });
    } catch (err) {
      console.log(err);
      if (err.response.status !== 401) {
        dispatch({
          type: EDIT_USER_ERROR,
          payload: { msg: err.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  //logout user
  const logoutUser = async () => {
    await authFetch("/auth/logout");
    dispatch({ type: LOGOUT_USER });
  };

  //setup user end here

  //show user card
  const showUserInfo = () => {
    dispatch({ type: SHOW_USER_CARD });
  };

  const addNotesToLocalStorage = (notes, active) => {
    if (localStorage.getItem("notes")) {
      localStorage.removeItem("notes");
      localStorage.removeItem("active");
    }
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("active", active);
  };

  //add notes setup
  const addNote = async (content, state) => {
    try {
      const { data } = await authFetch.post("/notes/add-note", {
        content,
        state,
      });
      const { notes, active } = data;
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: { notes, active },
      });
      addNotesToLocalStorage(notes, active);
    } catch (err) {
      if (err.response.status === 401) return;
      console.log(err);
    }
  };

  //update notes setup
  const updateNote = async (id, state) => {
    try {
      const { data } = await authFetch.patch(`/notes/${id}`, { state });
      const { notes, active } = data;
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: { notes, active },
      });
      addNotesToLocalStorage(notes, active);
    } catch (err) {
      if (err.response.status === 401) return;
      console.log(err);
    }
  };

  //delete notes setup
  const deleteNote = async (id) => {
    try {
      const { data } = await authFetch.delete(`/notes/${id}`);
      const { notes, active } = data;
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: { notes, active },
      });
      addNotesToLocalStorage(notes, active);
    } catch (err) {
      if (err.response.status === 401) return;
    }
  };

  const clearCompleted = async () => {
    try {
      const { data } = await authFetch.post("/notes/clearCompleted");
      const { notes, active } = data;
      addNotesToLocalStorage(notes, active);
      dispatch({
        type: GET_NOTES_SUCCESS,
        payload: { notes, active },
      });
    } catch (err) {
      if (err.response.status === 401) return;
    }
  };

  //get current user
  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });

    try {
      const { data } = await authFetch.get("/auth/getCurrentUser");
      const { user } = data;
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user },
      });
    } catch (err) {
      console.log(err.response);
      if (err.response.status === 401) return;
      logoutUser();
    }
  };

  useEffect(() => {
    i18n.changeLanguage(state.language).then(() => {
      getCurrentUser();
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        changeLang,
        changeMode,
        setupUser,
        editUser,
        getCurrentUser,
        showUserInfo,
        addNote,
        updateNote,
        deleteNote,
        clearCompleted,
        displayAlert,
        logoutUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, initialState, AppProvider };
