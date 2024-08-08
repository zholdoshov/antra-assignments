export function reducers() {
  const carsInitialValue = [
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
  ];

  const carsReducer = (state = carsInitialValue, { type, payload }) => {
    switch (type) {
      case "SELL":
        return state.map((car) => {
          if (car.id === payload) {
            return {
              ...car,
              quantity: car.quantity - 1,
            };
          } else {
            return car;
          }
        });
      default:
        return state;
    }
  };
  return carsReducer;
}
