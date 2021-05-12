import { React } from "react";
import "./tabs.css";
import search from "../assets/search.png";

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
            style={{ background: "#11698D", justifyContent: "center" }}
          >
            <span
              className="navbar-brand"
              style={{
                color: "white",
                fontSize: "medium",
              }}
            >
              Developers
            </span>
          </nav>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 1</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 2</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 3</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 1</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 2</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <img src={search} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Developer 3</h5>
                  <button className="btn btn-primary">Visit Website</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
