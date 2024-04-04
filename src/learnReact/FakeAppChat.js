import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJS'
    },
    {
        id: 2,
        name: 'NextJS'
    },
    {
        id: 3,
        name: 'VueJS'
    }
]

function FakeAppChat() {

    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])
    return (
        <ul>
            {lessons.map(lesson => (
                <li
                    key={lesson.id}
                    style={{
                        cursor: 'pointer',
                        color: lessonId === lesson.id ? 'red' : '#333',
                    }}
                    onClick={() => setLessonId(lesson.id)}
                >
                    {lesson.name}
                </li>
            ))}
        </ul>
    )
}

export default FakeAppChat