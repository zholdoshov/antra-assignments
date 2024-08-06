import React from "react";

export default function SetTimerForm(props) {
  return (
    <div>
      <label>
        <input
          type="number"
          value={props.minutes}
          onChange={(e) => props.setMinutes(Number(e.target.value))}
          placeholder="Minutes"
        />
        Minutes
      </label>
      <label>
        <input
          type="number"
          value={props.seconds}
          onChange={(e) => props.setSeconds(Number(e.target.value))}
          placeholder="Seconds"
        />
        Seconds
      </label>
      <button onClick={props.handleStart}>Start</button>
    </div>
  );
}
