import './Testimonials.css'
import ReactPlayer from "react-player";
const Testimonials = () => {
    return (
        <section id={"testimonials"}>
            <h5>Subscribe to</h5>
            <h2>My Youtube channel</h2>
            <div className={"video-wrapper"}>
                <ReactPlayer className={"videoplayer"} playing url="https://youtu.be/DUflrV2Nlzk?si=4DE9LkMJvIagw4q2" 
                muted={true}
                loop/>
            </div>
        </section>
    )
}

export default Testimonials