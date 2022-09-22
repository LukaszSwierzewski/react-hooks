// store/useStore.js

import React, { createContext, useReducer, useContext } from "react";

import { countInitialState, countActions } from "./countActions";
import { userInitialState, userActions } from "./userActions";
import { fetchInitialState, fetchActions } from "./fetchActions";
// combine initial states
const initialState = {
  ...countInitialState,
  ...userInitialState,
  ...fetchInitialState
};

const StoreContext = createContext(initialState);

// combine actions
const Actions = {
  ...userActions,
  ...countActions,
  ...fetchActions
};

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
