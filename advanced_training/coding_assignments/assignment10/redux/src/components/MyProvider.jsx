import React, { createContext, useContext, useReducer } from "react";

const MyContext = createContext();

export function MyProvider({ reducer, initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = { state, dispatch };

  return (
    <MyContext.Provider value={store}>{children}</MyContext.Provider>
  );
}

export function useMySelector(selector) {
  const { state } = useContext(MyContext);
  return selector(state);
}

export function useMyDispatch() {
  const { dispatch } = useContext(MyContext);
  return dispatch;
}