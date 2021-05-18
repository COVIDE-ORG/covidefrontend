import { React } from "react";
import "./tabs.css";
import manish_p from "../assets/Picture.jpeg"

const Homecard = () => {
  const techTeam = [
    {
      name:'Manish Bhardwaj',
      society: 'IoT Lab KiiT',
      image: manish_p
    },
    {
      name: "Sambit Majhi",
      society: "IoT Lab KiiT",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1lXZABk8btOrRO3ANV5p4gP_hXfFEpejl"
    },
    {
      name: "Sambit Saha",
      society: "IoT Lab KiiT",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1-Nr2c4seUnNvR0HFACkVmqP-oqZ6WKSi"
    },
    {
      name: "Abhishek Raj",
      society: "",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1C6hVsLd898XotnqyRBtSm8eNyYq6cVpK"
    },
    {
      name: "Nikhil Srivastava",
      society: "",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1Z6WfPuqjxMq5eQoEOrWwFZjV4i5Rj165"
    },
    {
      name: "Saatwik",
      society: "MSAC",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1fFJXM6eGIWxnLhlfDlf9MLAaTlqJ9X6S"
    },
    {
      name: "Mohit Patel",
      society: "IoT Lab, KiiT",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1J-YMMp5g8ZmoHW2zMCyF-ncZLz19Puur"
    },
    {
      name: "Akash Raj",
      society: "TPH",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1zTNkuhNMZ1W49NyEQLlFPTPc9DEZVYpu"
    },
    {
      name: "Sakshi Gairola",
      society: "IoT Lab, KiiT",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1O8-I8NA7Qyz7i_pZSWCgw0O9szsUlX3R"
    },
    {
      name: "Sagnik Ghosh",
      society: "MSAC",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1_dkDGVYA_dCHGmleS0bq052rdVRlg0tu"
    },
    {
      name: "Kartik Budhraja",
      society: "Kindle",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1ip8Bby23mgStYAY3H65cXCaiaqJF_0Un"
    },
    {
      name: "Rudit Rahul",
      society: "TPH",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1JvGajzRzAReAoL0DHduUAbXowW_EVDCH"
    },
    {
      name: "Lekhansh Ruprela",
      society: "",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1xBgCKpmFqzcz2iFRWMhE5r-qVGPzIcug"
    },
    {
      name: "Sanchit Hajela",
      society: "IoT Lab, KiiT",
      "D": "Tech Team",
      image: "https://drive.google.com/thumbnail?id=1D3tNsZ1fRlBUmm_rvty3gWD1UYSBmneF"
    }
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
          <h3 className="text-center mt-3">Tech Team</h3>
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
