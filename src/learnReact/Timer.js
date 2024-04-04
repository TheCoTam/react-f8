import { useState, useEffect } from "react"

function Timer() {

    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        setTimeout(() => {
            setCountDown(countDown - 1)
            console.log('countdown...');
        }, 1000)
    }, [countDown])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}

export default Timer