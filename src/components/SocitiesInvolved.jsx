import { React } from "react";
import "./tabs.css";
import iot from "../assets/iot.webp";
import tph from "../assets/tph.jpg";
import msac from "../assets/msac.png";

const Homecard = () => {

  const societies = [
    {
      society: 'IoT Lab KiiT',
      image: iot,
      link: 'https://www.iotkiit.in/'
    },
    {
      society: 'TPH KiiT',
      image: tph,
      link: 'https://blog.tph.org.in/'
    },
    {
      society: 'MSAC KiiT',
      image: msac,
      link: 'https://msackiit.tech/'
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
          
          <h3 className="text-center mt-3">Societies</h3>
          <div
            className="row mt-5"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            {societies?shuffle(societies).map((society)=>{
              return(
                <div className="col-md-3">
                  <a href={society.link} style={{textDecoration: "none",color:"black"}} target="_blank" rel="noopener noreferrer">
                <img
                  src={society.image}
                  alt="none"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "5px solid #11698D",
                    padding: "5px",
                  }}
                />
                <h6 className="mt-3">
                  {society.society} 
                </h6>
                </a>
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
