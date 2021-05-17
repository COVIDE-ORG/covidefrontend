import { React, useEffect, useState } from "react";
import Table from "./ImpLinkTable";
import "./tabs.css";

const Homecard = () => {
  const [datas, setDatas] = useState([]);
  const [cities, setcities] = useState([]);
  const [filteredData, setFilter] = useState([]);
  const [filteredHeaders, setHeaders] = useState([]);
  const[cityIndex,setCityIndex] = useState(null);
  const[stateIndex,setStateIndex] = useState(null);
  const[serviceIndex,setServiceIndex] = useState(null);
  const[services,setServices] = useState([]);
  const[searchedServices,setSearchservices] = useState([]);

  useEffect(() => {
    fetchResource();
  }, []);

  const fetchResource = () => {
    document.getElementById("tbs").innerHTML = "Please Wait";
    document.getElementById("tbs").disabled = true;
    document.getElementById("tbs2").innerHTML = "Please Wait";
    document.getElementById("tbs2").disabled = true;
    fetch(`https://covidresources.org.in/api/implinks`)
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
        setServiceIndex(data.headers.indexOf("Services available"))
        setCityIndex(data.headers.indexOf("City"))
        setStateIndex(data.headers.indexOf("State"))
        document.getElementById("tbs").innerHTML = "Search";
        document.getElementById("tbs").disabled = false;
        document.getElementById("tbs2").innerHTML = "Search";
        document.getElementById("tbs2").disabled = false;
      });
  };

  const hideOnSearch = () =>{
    document.getElementById("serviceButton").style.display = "none"
  }
  const chooseBloodGroup = () => {
    filtersearch();
    document.getElementById("serviceBar").style.display = "unset";
    document.getElementById("serviceButton").style.display = "none";
    document.getElementById("srvc").selectedIndex = "0";
  };

  function serviceFilter() {
    const filtered = filteredData
      .map((data) => {
        if (data[serviceIndex] === document.getElementById("srvc").value || data[serviceIndex] ==="All Services") {
          return data;
        } else return "";
      })
      .filter(function (el) {
        return el !== "";
      });
    setFilter(filtered);
    document.getElementById("serviceBar").style.display = "none";
    document.getElementById("serviceButton").style.display = "unset";
    return;
  }
  const fetchServices = () => {
    
      setServices(
        searchedServices
          .map((services) => services[serviceIndex])
          .filter((value, index, self) => self.indexOf(value) === index)
      );
      document.getElementById("serviceButton").style.display = "unset";
      document.getElementById("serviceBar").style.display = "none";
    return;
  };



  const fetchCity = () => {
    hideOnSearch();
    const state = document.getElementById("state").value;
    setcities(
      datas.data
        .map((id) => {
          if (id[stateIndex] === state) {
            return id[cityIndex];
          }
          return "";
        })
        .filter((value, index, self) => self.indexOf(value) === index)
    );
  };



  const filtersearch = () => {
    fetchServices();
    document.getElementById("tableView").style.display = "unset";
    document.getElementById("bsc").style.display = "none";
    if (datas.data) {
      const filters = () => {
        if (document.getElementById("city").value) {
          return datas.data.map((id) => {
            if (
              id[cityIndex] === document.getElementById("city").value &&
              id[stateIndex] === document.getElementById("state").value
            ) {
              return id;
            }
            return "";
          });
        } else if (document.getElementById("state").value) {
          return datas.data.map((id) => {
            if (id[stateIndex] === document.getElementById("state").value) {
              return id;
            }
            return "";
          });
        } else {
          return datas.data.map((res) => res);
        }
      };
      const filtered = filters().filter(function (el) {
        return el !== "";
      });
      setFilter(filtered);
    }
    setHeaders(datas.headers);
  };



  const search = () => {
    fetchServices();
    document.getElementById("tableView").style.display = "unset";
    document.getElementById("bsc").style.display = "none";
    if (datas.data) {
      const filters = () => {
        if (document.getElementById("city").value) {
          return datas.data.map((id) => {
            if (
              id[cityIndex] === document.getElementById("city").value &&
              id[stateIndex] === document.getElementById("state").value
            ) {
              return id;
            }
            return "";
          });
        } else if (document.getElementById("state").value) {
          return datas.data.map((id) => {
            if (id[stateIndex] === document.getElementById("state").value) {
              return id;
            }
            return "";
          });
        } else {
          return datas.data.map((res) => res);
        }
      };
      const filtered = filters().filter(function (el) {
        return el !== "";
      });
      setFilter(filtered);
      setSearchservices(filtered)
    }
    setHeaders(datas.headers);
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
              >
                Important Links
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{background: "none", color:"black"}}>Add Data</button>
                  </li> */}
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="homeSelect">
                <div>
                  <strong style={{ fontFamily: "Roboto" }}>Select State</strong>
                  <select
                    id="state"
                    className="form-select mt-2"
                    aria-label="Default select example"
                    onChange={fetchCity}
                  >
                    <option value="" defaultValue>
                      Any State
                    </option>
                    {datas.states
                      ? datas.states.map((states) => (
                          <option key={states} value={states}>
                            {states}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
                <div>
                  <strong style={{ fontFamily: "Roboto" }}>Select City</strong>
                  <select
                    className="form-select mt-2"
                    id="city"
                    aria-label="Default select example"
                  >
                    <option value="" defaultValue>
                      Any City
                    </option>
                    {cities
                      ? cities.map((cities) => {
                          if (cities !== "") {
                            return (
                              <option key={cities} value={cities}>
                                {cities}
                              </option>
                            );
                          }
                          return "";
                        })
                      : ""}
                  </select>
                </div>
              </div>

              {/* <div id="tableView" style={{ display: "none" }}>
                <div style={{ minWidth: "100%", textAlign: "center" }}>
                  <button
                    type="button"
                    id="tbs2"
                    className="btn btn-outline-secondary cbtn mt-2 mb-2"
                    onClick={search}
                  >
                    Search
                  </button>
                </div>
                <div className="mt-3">
                  <Table data={filteredData} headers={filteredHeaders}></Table>
                </div>
              </div> */}


              <div id="tableView" style={{ display: "none" }}>
                <div style={{ minWidth: "100%", textAlign: "center" }}>
                  <button
                    type="button"
                    id="tbs2"
                    className="btn btn-outline-secondary cbtn mt-2 mb-2"
                    onClick={search}
                  >
                    Search
                  </button>
                </div>
                <div className="mt-3">
                  <button
                    className="btn btn-outline-secondary cbtn mb-4"
                    id="serviceButton"
                    style={{ display: "none" }}
                    onClick={chooseBloodGroup}
                  >
                    Filter By Services
                  </button>
                  <div id="serviceBar" style={{ display: "none" }}>
                    <strong style={{ fontFamily: "Roboto" }}>
                      Select Service<span style={{ color: "red" }}> *</span>
                    </strong>
                    <select
                      id="srvc"
                      className="form-select mt-2 mb-1"
                      aria-label="Default select example"
                      style={{ marginLeft: "0" }}
                      onChange={serviceFilter}
                    >
                      <option value="" defaultValue>
                        Any Service
                      </option>
                      {services
                        ? services.map((plasma) => {
                            if (cities !== "") {
                              return (
                                <option key={plasma} value={plasma}>
                                  {plasma}
                                </option>
                              );
                            }
                            return "";
                          })
                        : ""}
                    </select>
                  </div>

                  <Table data={filteredData} headers={filteredHeaders}></Table>
                </div>
              </div>

              <div id="bsc" className="padinged text-center">
                <button
                  type="button"
                  id="tbs"
                  className="btn btn-outline-secondary cbtn mt-2"
                  onClick={search}
                >
                  Search
                </button>
              </div>
              <div className="card m-3 mt-4">
                <div className="card-body">
                  Important Note:
                  <p style={{ fontSize: "small", color: "gray" }}>
                  By using the website, you agree and understand that any information provided in the website on an as-is basis may change anytime without any notification or intimation. You also understand that the resources being provided are crowdsourced and TPH or any of its members do not take responsibility for the truth of any information provided in the website.
                  <br/>People using the platform are advised to use caution and do their own research and due diligence before using the resources provided. 
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
