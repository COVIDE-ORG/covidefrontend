import { React } from "react";
import "./tabs.css";
import { Link } from "react-router-dom";
import techTeam from "../assets/tt.png";
import volunteerTeamIcon from "../assets/vt.png";
import iot from "../assets/iot.webp";
import tph from "../assets/tph.jpg";
import dsc from "../assets/dsc.png";
import msac from "../assets/msac.png";

const Homecard = () => {

  const societies = [
    {
      society: 'IoT Lab KiiT',
      image: iot,
    },
    {
      society: 'TPH KiiT',
      image: tph
    },
    {
      society: 'DSC KiiT',
      image: dsc
    },
    {
      society: 'MSAC KiiT',
      image: msac
    },
  ]


  function shuffle(array) {
    var m = array.length, t, i;
  
    
    while (m) {
  
      
      i = Math.floor(Math.random() * m--);
  
      
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }
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
            style={{ background: "#11698D", justifyContent: "center" }}
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
              class="card text-center mt-2"
              style={{ width: "18rem", border: "none", }}
            >
              <img class="card-img-top" src={techTeam} alt="Card" style={{height:"150px",width:"150px",alignSelf: "center"}}/>
              <div class="card-body">
                <h5 class="card-title">Tech Team</h5>
                <Link
                  to="/ourteam/techteam"
                  class="btn btn-outline-secondary cbtn"
                >
                  Visit Tech Team
                </Link>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div
              class="card text-center mt-2"
              style={{ width: "18rem", border: "none" }}
            >
              <img class="card-img-top" src={volunteerTeamIcon} alt="Card" style={{height:"150px",width:"150px",alignSelf: "center"}} />
              <div class="card-body">
                <h5 class="card-title">Volunteer Team</h5>
                <Link
                  to="/ourteam/volunteerteam"
                  class="btn btn-outline-secondary cbtn"
                >
                  Visit Volunteer Team
                </Link>
              </div>
            </div>
          </div>
          <h3 className="text-center mt-3">Societies</h3>
          <div
            className="row mt-5"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            {societies?shuffle(societies).map((society)=>{
              return(
                <div className="col-md-3">
                <img
                  src={society.image}
                  alt="none"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "5px solid green",
                    padding: "5px",
                  }}
                />
                <h6 class="mt-3">
                  {society.society} 
                </h6>
              </div>
              )
            }):''}
            


            {/* <div className="col-md-3">
              <img
                src={search}
                alt="none"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "5px solid green",
                  padding: "5px",
                }}
              />
              <h6 class="mt-3">
                Manish Bhardwaj <br />
                IoT Lab KiiT
              </h6>
            </div>
            <div className="col-md-3">
              <img
                src={search}
                alt="none"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "5px solid green",
                  padding: "5px",
                }}
              />
              <h6 class="mt-3">
                Manish Bhardwaj <br />
                IoT Lab KiiT
              </h6>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
