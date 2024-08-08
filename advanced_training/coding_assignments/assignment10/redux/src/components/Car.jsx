import React from 'react'

export default function Car({car, sellCarHandler, addCarHandler}) {
  return (
    <div>
      <div>{car.name}</div>
      <div>{car.quantity}</div>
      <button onClick={() => sellCarHandler(car.id)}>Sell</button>
      <button onClick={() => addCarHandler(car.id)}>Add</button>
    </div>
  )
}
