export const carsInitialValue = {
  cars: [
    {
      id: 1,
      name: "Toyota",
      quantity: 10,
    },
    {
      id: 2,
      name: "Nissan",
      quantity: 10,
    },
    {
      id: 3,
      name: "Ford",
      quantity: 10,
    },
  ],
};

export const carsReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELL": {
      const newCars = state.cars.map((car) => {
        if (car.id === payload && car.quantity > 0) {
          return {
            ...car,
            quantity: car.quantity - 1,
          };
        } else {
          return car;
        }
      });
      return { ...state, cars: newCars };
    }
    case "ADD": {
      const newCars = state.cars.map((car) => {
        if (car.id === payload) {
          return {
            ...car,
            quantity: car.quantity + 1,
          };
        } else {
          return car;
        }
      });
      return { ...state, cars: newCars };
    }
    default:
      return state;
  }
};

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
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  dispatch({ type: "@@redux/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export const store = createMyStore(carsReducer, carsInitialValue);
