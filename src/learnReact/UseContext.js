import { useContext } from "react"
import { ThemeContext } from "../App"

export default function UseContext() {

    const theme = useContext(ThemeContext)
    return (
        <div className={theme}>
            <p>This is an paragraph.</p>
        </div>
    )
}