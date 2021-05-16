import { React } from "react";
import "./tabs.css";
import volunteerTeamIcon from "../assets/vt.png"


const Homecard = () => {
  const volunteerTeam = [
    {
      name:'Name',
      society: 'Society',
      image: volunteerTeamIcon
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
              Volunteer Team
            </span>
          </nav>

  <div className="row mt-5" style={{justifyContent:"center",textAlign:"center"}}>
    {volunteerTeam?shuffle(volunteerTeam).map((person)=>{
      return (
        <div className="col-md-3">
        <img src={person.image} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid green", padding: "5px"}} />
        <h6 class="mt-3">{person.name} <br />
        {person.society}</h6>
      </div>
      )
    }):''} 
  </div>

        </div>
      </div>
    </>
  );
};

export default Homecard;
