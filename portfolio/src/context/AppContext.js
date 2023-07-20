import React, { useContext, useReducer } from "react";
import reducer from "./reducer.js";
import { HIDE_SIDEBAR, TOGGLE_SIDEBAR } from "./actions.js";

const initialState = {
  showSidebar: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };
  const hideSidebar = () => {
    dispatch({ type: HIDE_SIDEBAR });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        hideSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
