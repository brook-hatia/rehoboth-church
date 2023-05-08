import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import "../components/styles/Header.css"
import Dropdown from "./Dropdown.js"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
    const [hover, setHover] = useState(false);
    const location = useLocation();

    const arrayList = () => [
        {
            path: "/events#",
            title: "Worship"
        },

        {
            path: "/ministries/bible-study",
            title: "Bible Study"
        },

        {
            path: "/ministries/kids",
            title: "Kids"
        }
    ]

    return (
        <nav>
            <a href="/rehoboth-church" className="header-logo">
                    <div className="header-logo-img">
                        <img src="/images/Home/logo.png" alt="Rehoboth Evangelical Ethiopian Church logo"/>
                    </div>
                    <div className="header-logo-text">
                        <h1>Rehoboth</h1>
                        <p>Ethiopian Church</p>
                    </div>
            </a>

            <div className="header-links">
                <a className={location.pathname === '/about'? 'active': ''} href="/rehoboth-church/about">About</a>
                <a className={location.pathname === '/events'? 'active':''} href="/rehoboth-church/events">Events</a>
                
                <a  className= "dropdown-head" href="" onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}>Ministries <ArrowDropDownIcon/>
                    { hover === true ? Dropdown (arrayList(), "dropdown-items") : "" }
                </a>
                <a className={location.pathname === '/give'? 'active':''} href="/rehoboth-church/give">Give</a>
            </div>
        </nav>
    )
}
