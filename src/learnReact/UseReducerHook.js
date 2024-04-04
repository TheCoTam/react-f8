import { useReducer } from "react"

const initialNum = 0

const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

const reducer = (num, action) => {
    switch (action) {
        case UP_ACTION:
            return num + 1;
        case DOWN_ACTION:
            return num - 1;
        default:
            throw new Error('invalid action');
    }
}
export default function UseReducerHook() {

    const [num, dispatch] = useReducer(reducer, initialNum)

    return (
        <div>
            <h1>{num}</h1>
            <br />
            <button onClick={() => dispatch(UP_ACTION)}>+ 1</button>
            <button onClick={() => dispatch(DOWN_ACTION)}>- 1</button>
        </div>
    )
}