import React, { createContext, useContext, useReducer, useState, useEffect } from "react";

const MyContext = createContext();

export function MyProvider({ reducer, initialState, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = { state, dispatch };

  return (
    <MyContext.Provider value={store}>{children}</MyContext.Provider>
  );
}

export const useMySelector = (selector) => {
  const {state} = useContext(MyContext);
  const [selectedState, setSelectedState] = useState(() => selector(state));

  useEffect(() => {
    const newSelectedState = selector(state);
    if (newSelectedState !== selectedState) {
      setSelectedState(newSelectedState);
    }
  }, [state, selectedState, selector]);

  return selectedState;
};

export function useMyDispatch() {
  const { dispatch } = useContext(MyContext);
  return dispatch;
}