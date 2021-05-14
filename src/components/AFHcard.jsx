import { React, useState } from "react";
import "./tabs.css";

const Homecard = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      number: contact,
      querry: query,
    };
    if (name && contact && query) {
      fetch("http://168.62.36.33:8000/api/help/create", {
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
            setContact("");
            setQuery("");
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
      alert("Please fill Mandatory Fields");
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
          <div className="homeSelect mt-5">
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Name<span style={{ color: "red" }}> *</span>
              </strong>
              <input
                className="form-control"
                type="text"
                onChange={handleName}
                placeholder="Enter Name"
                aria-label="default input example"
              ></input>
            </div>
            <div>
              <strong style={{ fontFamily: "Roboto" }}>
                Contact Number<span style={{ color: "red" }}> *</span>
              </strong>
              <input
                className="form-control"
                onChange={handleContact}
                type="text"
                placeholder="Enter Contact Number"
                aria-label="default input example"
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <strong style={{ fontFamily: "Roboto" }}>
                Query<span style={{ color: "red" }}> *</span>
              </strong>
              <select onChange={handleQuery} className="form-select mt-1">
                <option selected>Select Query</option>
                <option value="Query One">Query One</option>
                <option value="Query Two">Query Two</option>
                <option value="Query Three">Query Three</option>
              </select>
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
                Enter Your Query<span style={{ color: "red" }}> *</span>
              </strong>
              <textarea
                value={query}
                onChange={handleQuery}
                className="form-control mt-1"
                placeholder="Enter Your Query"
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
