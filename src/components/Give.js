import "./styles/Give.css"

export default function Give() {
    return (
        <div>
            <Give_Body_first/>
            <Give_Body_second/>
        </div>
    )
}

const Give_Body_first = () => {
    return (
        <div className="give-body-first">
            <blockquote>
                <p>
                    "Verse about how giving is important"<br/>
                    <span>verse 1:1</span>
                </p>
            </blockquote>

            <div className="give-options">
                <div>
                    <img src="/images/Home/body-third.jpeg" alt=""/>
                    <p>
                    Support Rehoboth by making donations to 
                    support the church.<br/>
                    <a href="/give/support-rehoboth">Learn More &gt;</a>
                    </p>
                    <br/>
                    <div className="give-options-button">
                        <button>Give</button>
                    </div>
                </div>

                <div>
                    <img src="/images/Home/body-third.jpeg" alt=""/>
                    <p>
                        We want to support our sister church located in
                        Addis Ababa, Ethiopia.<br/>
                        <a href="/give/support-ethiopia">Learn More &gt;</a>
                    </p>
                    <br/>
                    <div className="give-options-button">
                        <button>Give</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Give_Body_second = () => {
    return (
        <div className="give-body-second">
            <h1>The Gifts of Giving</h1>

            <div className="gifts-list">
                <div>
                    <h2>Verse 1: Gift 1</h2>
                    <p>The gifts of giving from the mentioned verse</p>
                </div>

                <div>
                    <h2>Verse 2: Gift 2</h2>
                    <p>The gifts of giving from the mentioned verse</p>
                </div>

                <div>
                    <h2>Verse 3: Gift 3</h2>
                    <p>The gifts of giving from the mentioned verse</p>
                </div>

                <div>
                    <h2>Verse 4: Gift 4</h2>
                    <p>The gifts of giving from the mentioned verse</p>
                </div>
            </div>
           
            <div className="give-button-final">
                <button>Give</button>
            </div>
            
        </div>
    )
}