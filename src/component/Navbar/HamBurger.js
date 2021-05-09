import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from "react-router-dom";
import "./HamBurger.css";

  
  const ITEM_HEIGHT = 48;

function HamBurger() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (e) => {
      setAnchorEl(null);
    };
    return (
        <div className="hamburger-nav">
        <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
      <Link className="ham-links" to='/'>
        <MenuItem onClick={handleClose}>Resources</MenuItem>
      </Link>
      <Link className="ham-links" to='/volunteer'>
        <MenuItem onClick={handleClose}>Volunteer</MenuItem>
      </Link>
      <Link className="ham-links" to='/imp-links'>
        <MenuItem onClick={handleClose}>Important Links</MenuItem>
      </Link>
      <Link className="ham-links" to='/ask-for-help'>
        <MenuItem onClick={handleClose}>Ask For Help</MenuItem>
      </Link>
      </Menu>
        </div>
    )
}

export default HamBurger
