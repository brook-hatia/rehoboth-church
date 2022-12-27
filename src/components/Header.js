import { React } from "react";
import { useLocation } from "react-router-dom";
import { Dropdown} from "react-bootstrap"
import "../components/styles/Header.css"

export default function Header() {
    const location = useLocation();

    return (
        <nav>
            <a href="/" className="header-logo">
                    <div className="header-logo-img">
                        <img src="/images/Home/logo.png" alt="Rehoboth Evangelical Ethiopian Church logo"/>
                    </div>
                    <div className="header-logo-text">
                        <h1>Rehoboth</h1>
                        <p>Ethiopian Church</p>
                    </div>
            </a>

            <div className="header-links">
                <a className={location.pathname === '/about'? 'active': ''} href="/about">About</a>
                <a className={location.pathname === '/events'? 'active':''} href="/events">Events</a>
                
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-name">Ministries</Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-items">
                        <Dropdown.Item href="/ministries/bible-study">Bible Study</Dropdown.Item>
                        <Dropdown.Item href="/ministries/kids">Kids</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a className={location.pathname === '/give'? 'active':''} href="/give">Give</a>
            </div>
        </nav>
    )
}