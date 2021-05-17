import { React, useState } from "react";
import "./tabs.css";

const Homecard = () => {
  
  const [name, setName] = useState("");
  const [place,setPlace]= useState("");
  const [age,setAge]= useState("");
  const [spo2,setSpo2] = useState("");
  const [admittedIn,setAdmitted] = useState("");
  const [query, setQuery] = useState("");
  const [aname,setAname]=useState("");
  const [contact, setContact] = useState("");
  const [altNo,setAlt] = useState("");
  const [covidSatus,setStatus] = useState("");
  


  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCovidStatus = (e) => {
    setStatus(e.target.value);
  };
  const handlePlace = (e) => {
    setPlace(e.target.value);
  };
  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };
  const handlespo2 = (e) => {
    setSpo2(e.target.value);
  };
  const handleAdmitted = (e) => {
    setAdmitted(e.target.value);
  };
  const handleAname = (e) => {
    setAname(e.target.value);
  };
  const handleAlt = (e) => {
    setAlt(e.target.value);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      PatientName: name,
      Place: place,
      Age: age,
      SpO2: spo2,
      AdmittedIn: admittedIn,
      Requirement: query,
      AttendantName: aname,
      ContactNo: contact,
      AlternateNo: altNo,
      CovidPositive: covidSatus

    };
    if (name && contact && query && place && age && spo2 && admittedIn && aname && covidSatus) {
      fetch("https://covidresources.org.in/api/help/cdreate", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            alert(
              "Your Query Has been Submitted Successfully. We will contact you soon"
            );
            setName("");
            setPlace("");
            setAge("");
            setContact("");
            setSpo2("");
            setAdmitted("");
            setAname("");
            setAlt("");
            setQuery("");
            document.getElementById("1").value="";
            document.getElementById("2").value="";
            document.getElementById("3").value="";
            document.getElementById("4").value="";
            document.getElementById("5").value="";
            document.getElementById("6").value="";
            document.getElementById("7").value="";
            document.getElementById("8").value="";
            document.getElementById("9").selectedIndex = "0";
          } else {
            console.log(res.status);
            alert("Something Went Wrong");
          }
        })
        .catch((err) => {
          alert("Something went Wrong from error");
          console.log(err);
        });
    } else {
      alert("Please fill all Mandatory Fields");
    }
  };
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
            className="navbar navbar-expand-lg navbar-light"
            style={{ background: "#11698D" }}
          >
            <span
              className="navbar-brand"
              style={{
                paddingLeft: "20px",
                color: "white",
                fontSize: "medium",
              }}
            >
              Ask For Help
            </span>
          </nav>
          <div className="homeSelect mt-3">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Are you Covid Positive<span style={{ color: "red" }}> *</span>
              </strong>
              <select
                    id="9"
                    className="form-select mt-2"
                    aria-label="Default select example"
                    style={{ marginLeft: "0" }}
                    onChange={handleCovidStatus}
                  >
                    <option value="" defaultValue>
                      Select
                    </option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>

                  </select>
            </div>
          </div>
          <div className="homeSelect mt-3">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Patient's Name<span style={{ color: "red" }}> *</span>
              </strong>
              <input
                id="1"
                className="form-control"
                type="text"
                onChange={handleName}
                placeholder="Enter Patient's Name"
                aria-label="default input example"
              ></input>
            </div>
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Place <span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="2"
                className="form-control"
                onChange={handlePlace}
                type="text"
                placeholder="Enter Place"
                aria-label="default input example"
              ></input>
            </div>
          </div>
          <div className="homeSelect mt-3">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Age<span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="3"
                className="form-control"
                type="text"
                onChange={handleAge}
                placeholder="Enter Patient's Age"
                aria-label="default input example"
              ></input>
            </div>
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Spo2 (Oxygen Level)<span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="4"
                className="form-control"
                onChange={handlespo2}
                type="text"
                placeholder="Enter Oxygen Level"
                aria-label="default input example"
              ></input>
            </div>
          </div>
          <div className="homeSelect mt-3">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Admitted In<span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="5"
                className="form-control"
                type="text"
                onChange={handleAdmitted}
                placeholder="Admitted In"
                aria-label="default input example"
              ></input>
            </div>
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Attendant's Name<span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="6"
                className="form-control"
                onChange={handleAname}
                type="text"
                placeholder="Enter Attendant's Name"
                aria-label="default input example"
              ></input>
            </div>
          </div>
          <div className="homeSelect mt-3">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Contact Number<span style={{ color: "red" }}> *</span>
              </strong>
              <input
              id="7"
                className="form-control"
                type="text"
                onChange={handleContact}
                placeholder="Enter Contact Number"
                aria-label="default input example"
              ></input>
            </div>
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Alternate Number
              </strong>
              <input
              id="8"
                className="form-control"
                onChange={handleAlt}
                type="text"
                placeholder="Enter Alternate Number"
                aria-label="default input example"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-12 text-center">
              <h6>OR</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <strong style={{ fontFamily: "Roboto" }}>
                Enter Your Requirement<span style={{ color: "red" }}> *</span>
              </strong>
              <textarea
                value={query}
                onChange={handleQuery}
                className="form-control mt-1"
                placeholder="Enter Your Requirement"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-outline-secondary cbtn"
                style={{ width: "100%" }}
              >
                Send
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="card m-3 mt-4">
            <div className="card-body">
              Important Note:
              <p style={{ fontSize: "small", color: "gray" }}>
              By using the website, you agree and understand that any information provided in the website on an as-is basis may change anytime without any notification or intimation. You also understand that the resources being provided are crowdsourced and TPH or any of its members do not take responsibility for the truth of any information provided in the website.<br/>
              People using the platform are advised to use caution and do their own research and due diligence before using the resources provided. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
