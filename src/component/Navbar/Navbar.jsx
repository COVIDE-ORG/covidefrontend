import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Body from './Body/Body';

export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h3 >COVID SELF HELP</h3>

                <a href="https://twitter.com/hashtag/IndiaFightsCorona" target="_blank" rel="noreferrer noopener">
                    <p>#IndiaFightsCorona</p> </a>

            </div>

            <ul className="nav-links">
                <Link to='/' className="links">
                    <li>Resource</li>
                </Link>
                <Link to='/volunteer' className="links">
                    <li>Volunteer</li>
                </Link>
                <Link to='/imp-links' className="links">
                    <li>Important Links</li>
                </Link>
                <Link to='/ask-for-help' className="links">
                    <li>Ask For Help</li>
                </Link>

            </ul>
        </div>
    )
}
