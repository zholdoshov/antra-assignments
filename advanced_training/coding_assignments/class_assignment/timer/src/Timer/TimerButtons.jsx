import React from "react";

export default function TimerButtons(props) {
  return (
    <div>
      <button onClick={props.handlePause}>Pause</button>
      <button onClick={props.handleResume}>Resume</button>
      <button onClick={props.handleReset}>Reset</button>
    </div>
  );
}
