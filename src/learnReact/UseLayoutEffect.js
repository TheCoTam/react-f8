import { useLayoutEffect, useState } from "react"

export default function UseLayoutEffect() {

    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count])

    const handleIncrease = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
