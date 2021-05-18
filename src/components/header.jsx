import React from 'react'
import {Link, withRouter} from 'react-router-dom';
import logo from "../assets/CFIL.png"
import "./header.css"
const Header =() => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#11698D"}}>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="nav-link" to="/">
                <span className="navbar-brand" style={{color:"white"}}><img id="logo" src={logo} alt=""  style={{height: "40px",marginTop:"-13px",marginBottom:"-6px"}}/>Covid Free India</span></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/">Resources</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/importantlinks">Important Links</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/askforhelp">Ask for Help</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/volunteers">Contribute</Link>
                    </li><li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/ourteam">Our Team</Link>
                    </li>
                   
                </ul>
                </div>
              </div>
            </nav>       
        </>
    )
}
export default withRouter(Header);