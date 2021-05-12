import React from 'react'
import {Link, withRouter} from 'react-router-dom';
const Header =() => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" style={{background: "#11698D"}}>
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand" style={{paddingLeft: "100px",color:"white"}}>Covid Self Help</span>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  </ul>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/">Resource</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/volunteers">Volunteers</Link>
                    </li><li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/importantlinks">Important Links</Link>
                    </li><li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/askforhelp">Ask for Help</Link>
                    </li><li className="nav-item">
                    <Link className="nav-link"  style={{marginRight:"40px",color:"white"}} to="/developers">Developers</Link>
                    </li>
                   
                </ul>
                </div>
              </div>
            </nav>       
        </>
    )
}
export default withRouter(Header);