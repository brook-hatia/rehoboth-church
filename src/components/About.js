import "./styles/About.css"

export default function About() {
    return (
        <div>
            <Hero/>
            <Bodyfirst/>
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
                    <h2>Our belief</h2>
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
                    <h2>Our Vision</h2>
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
                        <div>
                        
                        </div>

                    </div>

                    <div>
                        <div>
                        
                        </div>
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

const Bodysecond = () => {
    return (
        <div className="body-second">
            <h1>Prayer</h1>
            <p>
                At Rehoboth we gather every wednesday to pray
                about Ethiopia among other things. You can
                attend the prayer <a href="#">in-person</a> or <a href="#">online</a>, 7 pm - 8 pm
            </p>
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