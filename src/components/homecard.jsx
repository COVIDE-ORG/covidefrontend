import { React, useEffect, useState } from "react";
import Table from "./ResourceTable";
import "./tabs.css";
import HashLoader from "react-spinners/HashLoader";

const Homecard = () => {
  const [datas, setDatas] = useState([]);
  const [cities, setcities] = useState([]);
  const [filteredData, setFilter] = useState([]);
  const [filteredHeaders, setHeaders] = useState([]);
  const [plasma, setPlasma] = useState([]);
  const [plasmaIndex, setPlasmaIndex] = useState(null);
  const [cityIndex, setCityIndex] = useState(null);
  const [stateIndex, setStateIndex] = useState(null);
  const [filterButton, setFilterButton] = useState(null);
  const[loading,setLoading] = useState(false);

  const [oxygenData, setOxygenData] = useState([]);
  const [bedsData, setBedData] = useState([]);
  const [plasmaData, setPlasmaData] = useState([]);
  const [ambulanceData, setAmbulanceData] = useState([]);
  const [medsData, setMedicineData] = useState([]);
  const [volunteersData, setVolunteersData] = useState([]);
  const [miscData, setMiscData] = useState([]);

  useEffect(() => {
    setLoading(true)
    Promise.all([fetch(`https://covidresources.org.in/api/resource/oxygen`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/beds`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/plasma`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/ambulance`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/volunteers`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/meds`)
      .then((response) => response.json()),
    fetch(`https://covidresources.org.in/api/resource/misc`)
      .then((response) => response.json())])
    .then(([d1,d2,d3,d4,d5,d6,d7])=>{
        setOxygenData(d1);
        setBedData(d2);
        setPlasmaData(d3);
        setAmbulanceData(d4);
        setVolunteersData(d5);
        setMedicineData(d6);
        setMiscData(d7);
        setLoading(false)
      }).catch(err =>{
        alert("Something Went Wrong")
      })
  
  }, []);

  // const fetchResource = () => {
  //   if(!document.getElementById("rname").value){
  //     return;
  //   }
  //   setFilterButton(buttonText());
  //   document.getElementById("plasmaButton").style.display = "none";
  //   document.getElementById("alert").style.display = "none"
  //   document.getElementById("tbs").innerHTML = "Please Wait";
  //   document.getElementById("tbs").disabled = true;
  //   document.getElementById("tbs2").innerHTML = "Please Wait";
  //   document.getElementById("tbs2").disabled = true;
  //   const rname = document.getElementById("rname").value.toLowerCase();
  //   if (rname) {
  //     fetch(`https://covidresources.org.in/api/resource/${rname}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setDatas(data);
  //         if(rname === "plasma"){
  //           setPlasmaIndex(data.headers.indexOf("Blood Group"))
  //         }else if(rname === "beds"){
  //           setPlasmaIndex(data.headers.indexOf("Type of Bed"))
  //         }else if(rname === "meds"){
  //           setPlasmaIndex(data.headers.indexOf("Medicine Name"))
  //         }else if(rname === "misc"){
  //           setPlasmaIndex(data.headers.indexOf("Services "))
  //         }
  //         setCityIndex(data.headers.indexOf("City"))
  //         setStateIndex(data.headers.indexOf("State"))
  //         document.getElementById("tbs").innerHTML = "Search";
  //         document.getElementById("tbs").disabled = false;
  //         document.getElementById("tbs2").innerHTML = "Search";
  //         document.getElementById("tbs2").disabled = false;
  //         document.getElementById("state").selectedIndex = "0";
  //         setcities([]);
  //       });
  //   }
  // };

  const fetchResource = () => {
    if (!document.getElementById("rname").value) {
      return;
    }
    setFilterButton(buttonText());
    document.getElementById("plasmaButton").style.display = "none";
    document.getElementById("alert").style.display = "none";
    document.getElementById("tbs").innerHTML = "Please Wait";
    document.getElementById("tbs").disabled = true;
    document.getElementById("tbs2").innerHTML = "Please Wait";
    document.getElementById("tbs2").disabled = true;
    const rname = document.getElementById("rname").value.toLowerCase();
    if (rname === "oxygendata") {
      setDatas(oxygenData);
      setCityIndex(oxygenData.headers.indexOf("City"));
      setStateIndex(oxygenData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "bedsdata") {
      setDatas(bedsData);
      if (rname === "bedsdata") {
        setPlasmaIndex(bedsData.headers.indexOf("Type of Bed"));
      } 
      setCityIndex(bedsData.headers.indexOf("City"));
      setStateIndex(bedsData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "plasmadata") {
      setDatas(plasmaData);
      if (rname === "plasmadata") {
        setPlasmaIndex(plasmaData.headers.indexOf("Blood Group"));
      } 
      setCityIndex(plasmaData.headers.indexOf("City"));
      setStateIndex(plasmaData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "ambulancedata") {
      setDatas(ambulanceData);
      setCityIndex(ambulanceData.headers.indexOf("City"));
      setStateIndex(ambulanceData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "medsdata") {
      setDatas(medsData);
      if (rname === "medsdata") {
        setPlasmaIndex(medsData.headers.indexOf("Medicine Name"));
      }
      setCityIndex(medsData.headers.indexOf("City"));
      setStateIndex(medsData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "volunteersdata") {
      setDatas(volunteersData);
      setCityIndex(volunteersData.headers.indexOf("City"));
      setStateIndex(volunteersData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    } else if (rname === "miscdata") {
      setDatas(miscData);
      if (rname === "miscdata") {
        setPlasmaIndex(miscData.headers.indexOf("Services "));
      }
      setCityIndex(miscData.headers.indexOf("City"));
      setStateIndex(miscData.headers.indexOf("State"));
      document.getElementById("tbs").innerHTML = "Search";
      document.getElementById("tbs").disabled = false;
      document.getElementById("tbs2").innerHTML = "Search";
      document.getElementById("tbs2").disabled = false;
      document.getElementById("state").selectedIndex = "0";
      setcities([]);
    }
  };

  const buttonText = () => {
    if (document.getElementById("rname").value === "plasmaData") {
      return "Blood Group";
    } else if (document.getElementById("rname").value === "bedsData") {
      return "Bed Type";
    } else if (document.getElementById("rname").value === "medsData") {
      return "Medicine Name";
    } else if (document.getElementById("rname").value === "miscData") {
      return "Services";
    }
  };
  const chooseBloodGroup = () => {
    search();
    document.getElementById("plasmaBar").style.display = "unset";
    document.getElementById("plasmaButton").style.display = "none";
    document.getElementById("bgroup").selectedIndex = "0";
  };

  function plasmaFilter() {
    const filtered = filteredData
      .map((data) => {
        if (
          data[plasmaIndex] === document.getElementById("bgroup").value ||
          data[plasmaIndex] === "All Blood Groups" ||
          data[plasmaIndex] === "All Medicines" ||
          data[plasmaIndex] === "All Types of Bed"
        ) {
          return data;
        } else return "";
      })
      .filter(function (el) {
        return el !== "";
      });
    setFilter(filtered);
    document.getElementById("plasmaBar").style.display = "none";
    document.getElementById("plasmaButton").style.display = "unset";
    return;
  }

  const fetchPlasma = () => {
    if (
      document.getElementById("rname").value === "plasmaData" ||
      document.getElementById("rname").value === "bedsData" ||
      document.getElementById("rname").value === "medsData" ||
      document.getElementById("rname").value === "miscData"
    ) {
      setPlasma(
        datas.data
          .map((plasma) => plasma[plasmaIndex])
          .filter((value, index, self) => self.indexOf(value) === index)
      );
      document.getElementById("plasmaButton").style.display = "unset";
      document.getElementById("plasmaBar").style.display = "none";
    } else {
      document.getElementById("plasmaButton").style.display = "none";
      document.getElementById("plasmaBar").style.display = "none";
    }
    return;
  };

  const fetchCity = () => {
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

  function search() {
    if (!document.getElementById("rname").value) {
      document.getElementById("alert").style.display = "unset";
      return;
    }

    fetchPlasma();
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
    return;
  }
  return (
    <>
      {/* {JSON.stringify(plasma)} */}
      {
        loading ?
        <div style={{textAlign:"center",display:"flex",justifyContent: "center",alignItems:"center", width:"100%",height:"80vh"}}>
        <HashLoader color="#11698D" loading={loading} css="" size={150} />
        </div>
        :
      
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
          <div id="alert" style={{ display: "none" }}>
            <div className="alert alert-danger" role="alert">
              Please Select Resource
            </div>
          </div>
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
                Search Data
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
              <div className="row">
                <div className="col-md-4">
                  <strong style={{ fontFamily: "Roboto" }}>
                    Select Resource<span style={{ color: "red" }}> *</span>
                  </strong>
                  <select
                    id="rname"
                    className="form-select mt-2"
                    aria-label="Default select example"
                    style={{ marginLeft: "0" }}
                    onChange={fetchResource}
                  >
                    <option value="" defaultValue>
                      Select Resource
                    </option>
                    <option value="oxygenData">Oxygen</option>
                    <option value="bedsData">Beds</option>
                    <option value="plasmaData">Plasma</option>
                    <option value="ambulanceData">Ambulance</option>
                    <option value="medsData">Medicines</option>
                    <option value="volunteersData">Volunteers</option>
                    <option value="miscData">Miscellaneous</option>
                  </select>
                </div>

                <div className="col-md-4">
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
                <div className="col-md-4">
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

              {/* {JSON.stringify(filteredData)} */}

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
                    className="btn btn-danger mb-4"
                    id="plasmaButton"
                    style={{ display: "none" }}
                    onClick={chooseBloodGroup}
                  >
                    Filter By {filterButton}
                  </button>
                  <div id="plasmaBar" style={{ display: "none" }}>
                    <strong style={{ fontFamily: "Roboto" }}>
                      {filterButton}
                      <span style={{ color: "red" }}> *</span>
                    </strong>
                    <select
                      id="bgroup"
                      className="form-select mt-2 mb-1"
                      aria-label="Default select example"
                      style={{ marginLeft: "0" }}
                      onChange={plasmaFilter}
                    >
                      <option value="" defaultValue>
                        Any Type
                      </option>
                      {plasma
                        ? plasma.map((plasma) => {
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
                    By using the website, you agree and understand that any
                    information provided in the website on an as-is basis may
                    change anytime without any notification or intimation. You
                    also understand that the resources being provided are
                    crowdsourced and TPH or any of its members do not take
                    responsibility for the truth of any information provided in
                    the website.
                    <br />
                    People using the platform are advised to use caution and do
                    their own research and due diligence before using the
                    resources provided.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div> */}
          </div>
        </div>
      </div>}
    </>
  );
};

export default Homecard;
