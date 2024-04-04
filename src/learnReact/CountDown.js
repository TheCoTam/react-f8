import { useState, useRef } from "react";

export default function CountDown() {

    const [count, setCount] = useState(60)
    let timerId = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(preCount => preCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}