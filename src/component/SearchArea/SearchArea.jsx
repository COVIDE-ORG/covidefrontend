import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import indianStates from '../../constant/indiaState';
import { getResources } from '../../redux/api';
import CTable from '../Table/table.component';
import "./SearchArea.css";



export default function SearchArea() {
    const [showtable, setval] = useState(0);

    const [resource, setResource] = useState("");

    const dispatch = useDispatch();

    const getData = (e) => {
        dispatch(getResources(e.target.value));
    }

    const data = useSelector(state => state);

    return (
        <div className="searchArea">

            <div className="searchArea__top">
                <div className="searchArea__input">
                    <label htmlFor="resource">Covid Resources<span>*</span></label>
                    <select onChange={getData} id="resource">
                        <option value="oxygen">Oxygen</option>
                        <option value="beds">Beds</option>
                        <option value="plasma">Plasma</option>
                        <option value="meds">Meds</option>
                        <option value="ambulance">Ambulance</option>
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="state">State<span>*</span></label>
                    <select id="state">
                        <option value="all">All State</option>
                        {
                            data.states.map(stateName => <option key={stateName} value={stateName}>{stateName}</option>)
                        }
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="city">City<span>*</span></label>
                    <select id="city">
                        {
                            data.cities.map(city => <option key={city} value={city}>{city}</option>)
                        }
                    </select>
                </div>
            </div>

            <center className="searchArea__mid">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setval(1)}
                >
                    Search
                </Button>
                <div className='table'>
                    {
                        showtable ? <CTable /> : null
                    }
                </div>
            </center>

        </div>
    )
}
