import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Body from './Body/Body';



export default function Navbar() {
    return (
        <div className="navbar">
            <h3 >COVID SELF HELP</h3>

            <a href="https://twitter.com/hashtag/IndiaFightsCorona">
                <p>#IndiaFightsCorona</p> </a>
            

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
