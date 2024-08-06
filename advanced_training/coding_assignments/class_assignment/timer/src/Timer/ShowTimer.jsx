import React from "react";

export default function ShowTimer(props) {
  return (
    <div>
      <span>{props.fn(props.time)}</span>
    </div>
  );
}
