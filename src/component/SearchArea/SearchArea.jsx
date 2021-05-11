import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTable, selectResource, selectState, selectCity } from '../../redux/action';
import { getResources } from '../../redux/api';
import "./SearchArea.css";



export default function SearchArea() {
    
    const dispatch = useDispatch();

    const getData = (e) => {
        dispatch(selectResource(e.target.value));
        dispatch(getResources(e.target.value));
    }

    const getState = (e) => {
        dispatch(selectState(e.target.value));
    }

    const getCity = (e) => {
        dispatch(selectCity(e.target.value));
    }

    const toggleSearch = () => {
        dispatch(toggleTable());
    }

    const data = useSelector(state => state);

    return (
        <div className="searchArea">

            <div className="searchArea__top">
                <div className="searchArea__input">
                    <label htmlFor="resource">Covid Resources<span>*</span></label>
                    <select onChange={getData} id="resource">
                        <option >-</option>
                        <option value="oxygen">Oxygen</option>
                        <option value="beds">Beds</option>
                        <option value="plasma">Plasma</option>
                        <option value="meds">Meds</option>
                        <option value="ambulance">Ambulance</option>
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="state">State<span>*</span></label>
                    <select id="state" onChange={getState}>
                        <option >-</option>
                        <option value="all">All States</option>
                        {
                            data.states.filter((d) => d.toLowerCase() !== 'all' ).sort().map(stateName => <option key={stateName} value={stateName}>{stateName}</option>)
                        }
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="city">City<span>*</span></label>
                    <select id="city" onChange={getCity}>
                    <option>-</option>
                        <option value="all">All Cities</option>
                        {
                            data.cities.filter((d) => d.toLowerCase() !== 'all').sort().map(city => <option key={city} value={city}>{city}</option>)
                        }
                    </select>
                </div>
            </div>

            <center className="searchArea__mid">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={data.isTable? null : toggleSearch}
                    disabled={!data.selected_state}
                >
                    Search
                </Button>
            </center>

        </div>
    )
}