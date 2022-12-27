import "./styles/Support-Ethiopia.css"
import "./styles/Support-Rehoboth.css"

export default function Support_Ethiopia() {
    return (
        <div>
            <Top/>
            <BodyEth/>
        </div>
    )
}

const Top = () => {
    return (
        <div className="top">
            <p>Show your support</p>
            <button>Give</button>
        </div>
    )
}

const BodyEth = () => {
    return (
        <div className="ethiopia-body">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est 
                laborum.
            </p>
            <div className="images">
                <img src="/images/Home/body-third.jpeg" alt=""/>
                <img src="/images/Home/body-third.jpeg" alt=""/>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est 
                laborum.
            </p>
        </div>
    )
}