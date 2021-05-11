import React, { useEffect, useState } from 'react'
import "./ImpLinks.css";
import {Select,MenuItem} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Result from './Result';

function ImpLinks() {
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);
    const [data,setData]=useState([]);
    const[stateName,setStateName]=useState('');
    const[cityName,setCityName]=useState('');
    const [click,setClick]=useState(false);


    useEffect(()=>{
        fetch('http://168.62.36.33:8000/api/implinks')
        .then(res=>res.json())
        .then(data=>{
            setStates(data.states);
            setCities(data.cities);
            setData((data.data.map((info)=>(
             { 
              id:info[0],
              State:info[0],
              City:info[1],
              Service:info[2],
              Links:info[3],
              Other:info[4]
             }
            ))))
        });
    },[]);
    function handleStateChange(e)
    {
      setClick(false);
      setStateName('');
      setStateName(e.target.value);
      console.log(e.target.value);
    }

    function handleCityChange(e)
    {
      setClick(false);
      setCityName('');
      setCityName(e.target.value);
    }

    function handleClick()
    {
      if(stateName==='' || cityName==='')
        alert("Please select all the feilds");
      else
        setClick(true)
    }
    return (
      <div>
        <div className="imp-links">
        <div className="state-div">
        <InputLabel id="state">Select State*</InputLabel>
        <Select className='select-btn' onChange={handleStateChange}>
        {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        </div>

        <div className="city-div">
        <InputLabel id="state">Select City*</InputLabel>
        <Select className='select-btn'onChange={handleCityChange}>
        {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
          </Select>
        </div>
        <Button variant="contained" color="primary" onClick={handleClick} className="search-btn">Search</Button>
        </div>
        {click && <Result 
        State={stateName}
        City={cityName}
        Data={data}
        />}
      </div>
    )
}

export default ImpLinks
