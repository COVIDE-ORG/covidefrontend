import React, { useEffect, useState } from 'react'
import "./ImpLinks.css";
import {Select,MenuItem} from "@material-ui/core";
<<<<<<< HEAD
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinkIcon from '@material-ui/icons/Link';
import Result from './Result';

//Please Dont touch this page, Rudit Rahul is working on it!!!!

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles({
//   table: {
//     minWidth: 300,
//   },
// });

=======
>>>>>>> e71ddc54fe49836033a1a7ac84ee9e93819b34d1

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
    // const classes = useStyles();
    function handleStateChange(e)
    {
      setClick(false);
      setStateName('');
      setStateName(e.target.value);
      console.log(e.target.value);
    }

    function handleClick()
    {
      setClick(true)
    }
    return (
      <div>
        <div className="imp-links">
        <div className="state-div">
        {/* <input placeholder="Enter State" onChange={handleStateChange} type="text"/> */}
        <InputLabel id="state">Select State</InputLabel>
        <Select className='select-btn' onChange={handleStateChange}>
        {states.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        </div>

        {/* <div className="city-div">
        <InputLabel id="state">Select City</InputLabel>
        <Select className='select-btn'>
        {cities.map((city) => (
            <MenuItem key={city} value={city}>
              {city}
            </MenuItem>
          ))}
          </Select>
        </div> */}
        <Button variant="contained" color="primary" onClick={handleClick} className="search-btn">Search</Button>
        </div>
        {click && <Result 
        State={stateName}
        Data={data}
        />}
{/* 
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Service</StyledTableCell>
            <StyledTableCell align="right">Links</StyledTableCell>
            <StyledTableCell align="right">Other Infos</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.filter((data)=>{
              return stateName===data.State
          }).map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.State}
              </StyledTableCell>
              <StyledTableCell align="right">{data.City}</StyledTableCell>
              <StyledTableCell align="right">{data.Service}</StyledTableCell>
              <StyledTableCell align="right"><a href={data.Links}><LinkIcon/></a></StyledTableCell>
              <StyledTableCell align="right">{data.Other}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
      </div>
    )
}

export default ImpLinks
