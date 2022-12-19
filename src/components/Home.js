import { useEffect, useRef } from "react"
import { Icon } from '@material-ui/core';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import "./styles/Home.css"

export default function Home() {
    return (
        <div>
            <Bodyfirst/>
            <BodySecond/>
            <Bodythird/>
        </div>
    )
}

const Bodyfirst = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.play()
    }, []);

    return (
        <div className="Home-hero">
            <video src="/videos/Home/sample-hero.mp4" ref={videoRef} loop muted/>
            <div className="Home-hero-items">
                <h1>Welcome To Rehoboth</h1>
                <button>More about Rehoboth</button>
            </div>
        </div>
    )
}

const BodySecond = () => {
    const secondVideoRef = useRef(null);

    const playSecondVideo = () => {
        secondVideoRef.current.play();
    }

    return (
        <div className="Body-second">
            <div className="Body-second-left">
                <h2>Welcome to Rehoboth</h2>
                <p>We are an Ethiopian Evangelical Church located in Tulsa, Oklahoma. Join us for in an in-person, or online
                    service. <b>We are Live every Sunday between 11 am and 1 pm Central time.</b>
                </p>
            </div>

            <div className="Body-second-right">
                <div className="Body-second-right-top">
                    <video src="/videos/Home/sample-pastor.mp4" ref={secondVideoRef}/>
                    <button onClick={playSecondVideo}>
                        <PlayArrowIcon/>
                    </button>
                </div>

                <div className="Body-second-right-bottom">
                    <p>A message from our Pastor</p>
                </div>
                
            </div>
        </div>
    )
}

const Bodythird = () => {
    return (
        <div className="Body-third">
            <div>
                <div className="Body-third-first">
                    <h1>Service Times</h1>
                    <hr/>
                </div>
                
                <div className="Body-third-second">
                    <div>
                        <h2>SUNDAY</h2>
                        <p>in-person & online</p>
                        <p>11:00 am - 1:00 pm</p>
                    </div>

                    <div>
                        <h2>WEDNESDAY</h2>
                        <p>in-person prayer</p>
                        <p>11:00 am - 1:00 pm</p>
                    </div>

                    <div>
                        <h2>FRIDAY</h2>
                        <p>online Bible study</p>
                        <p>7:00 pm - 9:00 pm</p>
                    </div>

                    <div>
                        <h2>MONDAY</h2>
                        <p>Online Bible study</p>
                        <p>6:00 am - 7:00 pm</p>
                    </div>
                </div>

                <div className="Body-third-third">
                    <button>Watch Sermons</button>
                    <button>Watch Live</button>
                </div>
            </div>
        </div>
    )
}