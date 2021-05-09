import React from 'react';
import "./Navbar.css";
<<<<<<< HEAD
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
=======
import { Link } from "react-router-dom";
>>>>>>> e71ddc54fe49836033a1a7ac84ee9e93819b34d1
// import Body from './Body/Body';



export default function Navbar() {
    return (
        <div className="navbar">
            <div>
                <h3 >COVID SELF HELP</h3>

<<<<<<< HEAD
            <a href="https://twitter.com/hashtag/IndiaFightsCorona">
                <p>#IndiaFightsCorona</p> </a>
            
=======
                <a href="https://twitter.com/hashtag/IndiaFightsCorona" target="_blank" rel="noreferrer noopener">
                    <p>#IndiaFightsCorona</p> </a>

            </div>
>>>>>>> e71ddc54fe49836033a1a7ac84ee9e93819b34d1

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
<<<<<<< HEAD
                </Link> 
                
=======
                </Link>

>>>>>>> e71ddc54fe49836033a1a7ac84ee9e93819b34d1
            </ul>
        </div>
    )
}
