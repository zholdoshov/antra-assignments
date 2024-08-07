import React, { useEffect, useRef, useState } from 'react'

let laps = [];

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);
    const [prevTime, setPrevTime] = useState(0);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 10);
        } else if (!isRunning && intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
        setPrevTime(0);
        laps = [];
    }

    const handleLap = () => {
        laps = [`Lap ${laps.length + 1}: ${formatTime(time - prevTime)}`, ...laps];
        console.log(laps);
        setPrevTime(time);
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
    };

  return (
    <div className='stopwatch-container'>
        <div>
            <span id='stopwatch-display'>{formatTime(time)}</span>
        </div>
        <div>
            <button onClick={(!isRunning && time) > 0 ? handleReset : handleLap}>{(!isRunning && time) > 0 ? 'Reset' : 'Lap'}</button>
            <button onClick={isRunning ? handleStop : handleStart} style={isRunning ? {backgroundColor: '#832525', color: '#f62b2b', borderRadius: '5px'} : {backgroundColor: '#2c782c', color: '#39f539', borderRadius: '5px'}}>{isRunning ? 'Stop' : 'Start'}</button>
        </div>
        <div className='laps-container'>
            <ul>
                {laps.map((lap) => {
                    return (
                        <>
                            <li key={lap}>{lap}</li>
                            <hr></hr>
                        </>
                )
                })}
            </ul>
        </div>
    </div>
  )
}
