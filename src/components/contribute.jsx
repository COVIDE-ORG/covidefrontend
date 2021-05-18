import React from "react";

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
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
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
              >Join Our Team</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ background: "none", color: "black" }}>Provide Verified Leads</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ background: "none", color: "black" }}>Give Feedback</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><iframe title="Volunteer Form" src="https://docs.google.com/forms/d/e/1FAIpQLSd-NE_YXXcUo_hDw62-urK6DMA8lAQwfskdVFnUAwDoKyg_pw/viewform" width="100%" height="2000" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe></div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><iframe title="Volunteer Form" src="https://docs.google.com/forms/d/e/1FAIpQLScRtkxq09DYOyEh1FqPVE-1xJKCj9wEUE1mR_q51eMNRd2CQA/viewform" width="100%" height="2100" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe></div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><iframe title="Volunteer Form" src="https://docs.google.com/forms/d/e/1FAIpQLSeDq7wAUn8k6ipkoLaOeiAEEEgVRPWMPulzQEvwA2oTVDUUZQ/viewform" width="100%" height="1300" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no">Loading…</iframe></div>
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
