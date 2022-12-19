import React from "react";
import "../components/styles/Header.css"

export default function Header() {
    return (
        <nav>
            <div className="header-logo">
                <div className="header-logo-img">
                    <img src="/images/Home/logo.png" alt="Rehoboth Evangelical Ethiopian Church logo"/>
                </div>
                <div className="header-logo-text">
                    <h1>Rehoboth</h1>
                    <p>Ethiopian Church</p>
                </div>
            </div>

            <div className="header-links">
                <a href="#">About</a>
                <a href="#">Events</a>
                <a href="#">Ministries</a>
                <a href="#">Give</a>
            </div>
        </nav>
    )
}