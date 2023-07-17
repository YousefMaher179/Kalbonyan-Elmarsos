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
  REMOVE_NOTES_SUCCESS,
} from "./actions.js";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === CHANGE_LANGUAGE) {
    return {
      ...state,
      language: action.payload.language,
    };
  }

  if (action.type === CHANGE_MODE) {
    return {
      ...state,
      mode: action.payload.mode,
    };
  }

  if (action.type === SETUP_USER_BEGIN || action.type === EDIT_USER_BEGIN) {
    return { ...state, isProcessing: true, isLoading: true, userLoading: true };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isProcessing: false,
      showUserCard: false,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
      userLoading: false,
    };
  }

  if (action.type === SETUP_USER_ERROR || action.type === EDIT_USER_ERROR) {
    return {
      ...state,
      isProcessing: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  if (action.type === SHOW_USER_CARD) {
    return {
      ...state,
      showUserCard: !state.showUserCard,
    };
  }

  if (action.type === GET_CURRENT_USER_BEGIN) {
    return {
      ...state,
      userLoading: true,
    };
  }

  if (action.type === EDIT_USER_SUCCESS) {
    return {
      ...state,
      isProcessing: false,
      user: action.payload.user,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
      userLoading: false,
    };
  }

  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      userLoading: false,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
    };
  }

  if (action.type === GET_NOTES_SUCCESS) {
    return {
      ...state,
      notes: action.payload.notes,
      active: action.payload.active,
    };
  }

  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertTitle: "",
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
