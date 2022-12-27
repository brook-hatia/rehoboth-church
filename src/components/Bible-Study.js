import "./styles/Bible-Study.css"

export default function Bible_Study() {
    return (
        <div>
            <Bodyfirst/>
            <Bodysecond/>
            <Bodythird/>
        </div>
    )
}

const Bodyfirst = () => {
    return (
        <div className="hero">
            <h2>Word of the week</h2>
            <blockquote>
                "Don&apos;t let the enemy tell you what to do"
                <br/><span style={{fontSize: "1.2rem", color: "grey"}}>Mark 12:13</span>
            </blockquote>
        </div>
    )
}

const Bodysecond = () => {
    return (
        <div className="bible-body-first">
            <h2>Title</h2>

            <div className="bible-body-first-discus">
                <div>
                    <p><b>Verse 10:5</b> - 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>

                <div>
                    <p><b>Verse 10:5</b> - 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>

                <div>
                    <p><b>Verse 10:5</b> - 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>

                <div>
                    <p><b>Verse 10:5</b> - 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                        mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}

const Bodythird = () => {
    return (
        <div className="bible-body-second">
            <h2>Join Bible Study Groups</h2>

            <div className="bible-body-second-groups">
                <div>
                    <h2>Monday</h2>
                    <p>
                        6:00 am to 7:30 am <br/>
                        Leader: Name of Leader <br/>
                        Online
                    </p>
                    <a href="#">Join</a>
                </div>

                <div>
                    <h2>Friday</h2>
                    <p>
                        7:00 am to 9:00 pm <br/>
                        Leader: Name of Leader <br/>
                        Online <br/>
                        <a className="bible-link" href="#">Join</a>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}