import { useEffect, useState } from "react"

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    // 1. useEffect(callback)
    // 2. useEffect(callback, [])
    // 3. useEffect(callback, [deps])

    // --------------------------
    // 1. Callback luôn được gọi sau khi component mounted
    // useEffect(() => {
    //     document.title = title
    // })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                // show
                setShowGoToTop(true)
            } else {
                // hide
                setShowGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener');

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener');
        }
    }, [])

    useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h1>Aloha!!!</h1>
            <h1>{width}</h1>

            {tabs.map(tab => (
                <button
                    key={tab}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <br></br>

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />  
            <br></br>

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top!
                </button>
            )}
        </div>
    )
}

export default Content