import { useReducer, useRef } from "react"

const initState = {
    job: '',
    jobs: []
}

const ADD_JOB = 'add_jpb'
const SET_JOB = 'set_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload)

            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action!')
    }
}

export default function TodoApp() {

    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state

    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return(
        <>
            <h3>Todo</h3>
            <br />
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter act..."
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <br />
            {jobs.map((job, index) => (
                <li key={index}>
                    {job}
                    <span
                        onClick={() => dispatch(deleteJob(index))}
                        style={{
                            cursor: 'pointer'
                        }}
                    >
                        &times;
                    </span>
                </li>
            ))}
        </>
    )
}