import { useState } from "react"
import "./styles/About.css"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function About() {
    return (
        <div>
            <Hero/>
            <Bodyfirst/>
            <ExpandBody/>
            <Bodysecond/>
            <Bodythird/>
        </div>
    )
}

const Hero = () => {
    return (
        <div className="Hero">
            <h2>
                Rehoboth church wants to make a 
                lasting difference in your life, in our
                community, and in the world.
            </h2>
        </div>
    )
}

const Bodyfirst = () => {
    return (
        <div className="body-first">
            <div className="body-first-first">
                <div className="body-first-first-txt">
                    <h2>Community</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="body-first-first-img">
                
                </div>
            </div>

            <div className="body-first-second">
                <div className="body-first-second-img">
                
                </div>
                
                <div className="body-first-second-txt">
                    <h2>Outreach</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>

            <div className="body-first-third">
                <div className="body-first-third-img">
                    <div>
                        <img src="/images/Home/body-third.jpeg" alt=""/>
                    </div>

                    <div>
                        <img src="/images/Home/body-third.jpeg" alt=""/>
                    </div>
                </div>
                
                <div className="body-first-third-txt">
                    <h2>Why Rehoboth?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                        aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

const ExpandBody = () => {
    const[toggle, setToggle] = useState({
        toggle1: "expand-hidden",
        toggle2: "expand-hidden",
        toggle3: "expand-hidden",
        toggle4: "expand-hidden",
        toggle5: "expand-hidden",
        toggle6: "expand-hidden",
        toggle7: "expand-hidden"
    });

    const[expand, setExpand] = useState({
        expand1: "+",
        expand2: "+",
        expand3: "+",
        expand4: "+",
        expand5: "+",
        expand6: "+",
        expand7: "+"
    });

    const handleClick = (toggleName, expandName) => {
        setToggle({...toggle, [toggleName]: toggle[toggleName] === "expand-hidden" ? "expand-show" : "expand-hidden"});
        setExpand({...expand, [expandName]: expand[expandName] === "+" ? "-" : "+"});
    }

    return (
        <div className="expand-component">
            <h1>Our Beliefs</h1>
            <div className="expand-items">
                <div className="expand-items-head">
                    <h2>Item 1</h2>
                    <button onClick={() => handleClick("toggle1", "expand1")}>{expand.expand1 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle1}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 2</h2>
                    <button onClick={() => handleClick("toggle2", "expand2")}>{expand.expand2 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle2}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 3</h2>
                    <button onClick={() => handleClick("toggle3", "expand3")}>{expand.expand3 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle3}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 4</h2>
                    <button onClick={() => handleClick("toggle4", "expand4")}>{expand.expand4 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle4}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 5</h2>
                    <button onClick={() => handleClick("toggle5", "expand5")}>{expand.expand5 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle5}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 6</h2>
                    <button onClick={() => handleClick("toggle6", "expand6")}>{expand.expand6 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle6}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>

                <div className="expand-items-head">
                    <h2>Item 7</h2>
                    <button onClick={() => handleClick("toggle7", "expand7")}>{expand.expand7 === "+"?<ExpandMoreIcon/>:<ExpandLessIcon/>}</button>
                </div>
                <div className={`expandable ${toggle.toggle7}`}>
                    <p>lorem ipsun lorem ipsum</p>
                </div>
            </div>
        </div>
    )
}

const Bodysecond = () => {
    return (
        <div className="body-second">
            <h1>Prayer</h1>
            <p>
                At Rehoboth we gather every wednesday to pray
                about Ethiopia among other things. You can
                attend the prayer in-person at 7 pm - 8 pm
                every Wednesday
            </p>

            <form action="https://formsubmit.co/0ce161e33681d59756bfa75de4c02ffa" method="POST">
                <p>Elements with <span style={{color: "red"}}>*</span> are required</p>
                <label for="name"><span style={{color: "red"}}>*</span> Type your name:</label>
                <input name="name" className="name" type="text" placeholder="Name" required/>

                <label for="email"><span style={{color: "red"}}>*</span> Type your email:</label>
                <input name="email" className="email" type="email" placeholder="email@gmail.com" required/>

                <label for="prayer"><span style={{color: "red"}}>*</span> Type your prayer request:</label>
                <textarea name="prayer" className="prayer" type="text" rows="10" cols="50" placeholder="prayer request here" required/>

                <input type="submit"/>
            </form>
        </div>
    )
}

const Bodythird = () => {
    return (
        <div className="body-third">
            <div style={{textAlign: "center", marginBottom: "5rem"}}>
                <h2>&mdash; Meet out team &mdash;</h2>
            </div>

            <div className="body-third-second">
                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>

                <div>
                    <img src="/images/About/sample.jpeg" alt="portrait"/>
                    <h3>Sample Name</h3>
                    <p>Position Title</p>
                </div>
            </div>
        </div>
    )
}