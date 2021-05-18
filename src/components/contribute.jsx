import { React, useEffect, useState } from "react";
import Table from "./ResourceTable";
import "./tabs.css";

const Homecard = () => {
  return (
    <>
    
      {/* {JSON.stringify(plasma)} */}
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
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
  <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ background: "none", color: "black" }}
              >Become Volunteer</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ background: "none", color: "black" }}>Add Resource</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ background: "none", color: "black" }}>Give Feedback</button>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><iframe title="Volunteer Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfF6M5ID-Az0rM9IEPIzJZq3RJ6rY1S8B1wuhmuu25hwhu6sg/viewform" width="100%" height="2300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe></div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Profile</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Contact</div>
</div>
          {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ background: "none", color: "black" }}
              >
                Search Data
              </button>
            </li>
            <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{background: "none", color:"black"}}>Add Data</button>
                  </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">ramesh</div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Homecard;
