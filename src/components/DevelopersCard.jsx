import { React } from "react";
import "./tabs.css";
import { Link } from "react-router-dom";
import techTeam from "../assets/tt.png";
import volunteerTeamIcon from "../assets/vt.png";
import  society from "../assets/society.png"

const Homecard = () => {

  return (
    <>
      <div
        className="card dcard mb-5"
        style={{
          margin: "3% 15% 0 15%",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,0.1)",
          borderRadius: "6px",
          border: "none",
        }}
      >
        <div className="card-body">
          <nav
            className="navbar navbar-expand-lg navbar-light mb-3"
            style={{ background: "#11698D", justifyContent: "center",}}
          >
            <span
              className="navbar-brand"
              style={{
                color: "white",
                fontSize: "medium",
              }}
            >
              Our Team
            </span>
          </nav>
          <div className="row" style={{ justifyContent: "center" }}>
            <div
              className="card text-center mt-2"
              style={{ width: "18rem", border: "none", }}
            >
              <img className="card-img-top" src={techTeam} alt="Card" style={{height:"150px",width:"210px",alignSelf: "center"}}/>
              <div className="card-body">
                <h5 className="card-title">Tech Team</h5>
                <Link
                  to="/ourteam/techteam"
                  className="btn btn-outline-secondary cbtn"
                >
                  Visit Tech Team
                </Link>
              </div>
            </div>
            
            <div
              className="card text-center mt-2"
              style={{ width: "18rem", border: "none" }}
            >
              <img className="card-img-top" src={volunteerTeamIcon} alt="Card" style={{height:"150px",width:"150px",alignSelf: "center"}} />
              <div className="card-body">
                <h5 className="card-title">Volunteer Team</h5>
                <Link
                  to="/ourteam/volunteerteam"
                  className="btn btn-outline-secondary cbtn"
                >
                  Visit Volunteer Team
                </Link>
              </div>
            </div>
            <div
              className="card text-center mt-2"
              style={{ width: "18rem", border: "none", }}
            >
              <img className="card-img-top" src={society} alt="Card" style={{height:"150px",width:"150px",alignSelf: "center"}}/>
              <div className="card-body">
                <h5 className="card-title">Societies Involved</h5>
                <Link
                  to="/ourteam/societies"
                  className="btn btn-outline-secondary cbtn"
                >
                  Visit Societies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
