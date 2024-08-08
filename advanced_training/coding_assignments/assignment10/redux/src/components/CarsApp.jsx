import React from 'react'
import Car from './Car'
import { useMySelector, useMyDispatch } from './MyProvider';

export default function CarsApp() {
  const cars = useMySelector((state) => state);
  const dispatch = useMyDispatch();
  console.log(cars);

  const sellCarHandler = (id) => {
    dispatch({ type: "SELL", payload: id });
  };

  const addCarHandler = (id) => {
    dispatch({ type: "ADD", payload: id });
  };

  return (
    <div>
      {cars.map((car) => (
        <Car car={car} sellCarHandler={sellCarHandler} addCarHandler={addCarHandler} key={car.id} />
      )
      )}
    </div>
  )
}
