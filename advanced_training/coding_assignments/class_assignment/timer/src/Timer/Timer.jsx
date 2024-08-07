import React, { useState, useEffect } from "react";
import ShowTimer from "./ShowTimer";
import TimerButtons from "./TimerButtons";
import SetTimerForm from "./SetTimerForm";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    if (isRunning && time === 0) {
      alert("Time is up!");
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    if (minutes < 0 || seconds < 0) {
      alert("Invalid Input!");
    } else {
      setTime(minutes * 60 + seconds);
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if(isRunning) {
      setIsRunning(false);
      setPause(true);
    }
  };

  const handleResume = () => {
    if(pause) {
      setIsRunning(true);
      setPause(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setPause(false);
    if (minutes >= 0 && seconds >= 0) {
      setTime(minutes * 60 + seconds);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="timer-container">
      <SetTimerForm
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        handleStart={handleStart}
      />
      <TimerButtons
        handlePause={handlePause}
        handleResume={handleResume}
        handleReset={handleReset}
      />
      <ShowTimer fn={formatTime} time={time} />
    </div>
  );
};

export default Timer;
