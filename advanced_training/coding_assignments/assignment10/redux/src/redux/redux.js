import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

const StoreContext = createContext();

export function createMyStore(
  reducer,
  preloadedState = {},
  enhancer = undefined
) {
  if (enhancer) {
    console.log("enhancer is taken");
  }
  let state = preloadedState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      listeners.filter((l) => l !== listener);
    };
  }

  state.dispatch({ type: "@@redux/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export function myProvider({ store, children }) {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export function useMySelector(selector) {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error("useMySelector mu st be used within a Provider");
  }

  const { getState, subscribe } = store;
  const selectedState = selector(getState());

  const [state, setState] = useState(selectedState);

  useEffect(() => {
    const checkForUpdates = () => {
      const newSelectedState = selector(getState());
      if (newSelectedState !== state) {
        setState(newSelectedState);
      }
    };
    const unsubscribe = subscribe(checkForUpdates);
    return () => unsubscribe();
  }, [store, state, selector, subscribe, getState]);

  return state;
}
