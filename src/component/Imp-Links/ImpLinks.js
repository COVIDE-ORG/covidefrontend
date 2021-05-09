import React, { useEffect, useState } from 'react'
import "./ImpLinks.css";
import {Select,MenuItem} from "@material-ui/core";

function ImpLinks() {
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);


    useEffect(()=>{
        fetch('http://168.62.36.33:8000/api/implinks')
        .then(res=>res.json())
        .then(data=>{
            setStates(data.states);
            setCities(data.cities);
        });
    },[]);
    return (
        <div className="imp-links">
        <label>State</label>
        <Select className='select-btn'>
        {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
            <label>City</label>
        <Select className='select-btn'>
        {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        </div>
    )
}

export default ImpLinks
