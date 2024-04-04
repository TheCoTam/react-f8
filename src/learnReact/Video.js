import video1 from '../video/SetFireToTheRain.mp4'
import { useRef, forwardRef, useImperativeHandle } from 'react'

function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))

    return (
        <div>
            <video 
                ref={videoRef}
                src={video1}
                width={300}
                // controls
            />
        </div>
    )
}
export default forwardRef(Video)
