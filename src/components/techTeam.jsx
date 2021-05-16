import { React } from "react";
import "./tabs.css";
import manish_p from "../assets/Picture.jpeg"
import sambit_majhi_p from "../assets/sambit_majhi.png"
import sambit_saha_p from "../assets/sambit_saha.jpeg"
import mohit_patel_p from "../assets/mohit_patel.jpeg";
import rudit_rahul_p from "../assets/rudit_rahul.jpeg"




const Homecard = () => {
  const techTeam = [
    {
      name:'Manish Bhardwaj',
      society: 'IoT Lab KiiT',
      image: manish_p
    },
    {
      name:'Sambit Majhi',
      society: 'IoT Lab KiiT',
      image: sambit_majhi_p
    },
    {
      name:'Sambit Saha',
      society: 'IoT Lab KiiT',
      image: sambit_saha_p
    },
    {
      name:'Mohit Patel',
      society: 'IoT Lab KiiT',
      image: mohit_patel_p
    },
    {
      name:'Rudit Rahul',
      society: 'TPH',
      image: rudit_rahul_p
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
              Tech Team
            </span>
          </nav>

  <div className="row mt-5" style={{justifyContent:"center",textAlign:"center"}}>
    {shuffle(techTeam).map((person)=>{
      return (
        <div className="col-md-3">
        <img src={person.image} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid #11698D", padding: "3px"}} />
        <h6 className="mt-3">{person.name} <br />
        {person.society}</h6>
      </div>
      )
    })}
    
    {/* <div className="col-md-3">
      <img src={search} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid green", padding: "5px"}} />
      <h6 className="mt-3">Manish Bhardwaj <br />
      IoT Lab KiiT</h6>
    </div>
    <div className="col-md-3">
      <img src={search} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid green", padding: "5px"}} />
      <h6 className="mt-3">Manish Bhardwaj <br />
      IoT Lab KiiT</h6>
    </div>
    <div className="col-md-3">
      <img src={search} alt="none" style={{width: "150px",height:"150px",borderRadius:"50%",objectFit:"cover",border: "5px solid green", padding: "5px"}} />
      <h6 className="mt-3">Manish Bhardwaj <br />
      IoT Lab KiiT</h6>
    </div> */}
    
    
   
  </div>

        </div>
      </div>
    </>
  );
};

export default Homecard;
