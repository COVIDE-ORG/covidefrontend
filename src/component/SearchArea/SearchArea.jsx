import { Button } from '@material-ui/core';
import React from 'react';
import indianStates from '../../constant/indiaState';
import CTable from '../Table/table.component';
import "./SearchArea.css";

export default function SearchArea() {
    const [showtable, setval] = React.useState(0);
    return (
        <div className="searchArea">

            <div className="searchArea__top">
                <div className="searchArea__input">
                    <label htmlFor="resource">Covid Resources<span>*</span></label>
                    <select id="resource">
                        <option value="volvo">Oxygen</option>
                        <option value="saab">Meds</option>
                        <option value="saab">Please Add More</option>
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="state">State<span>*</span></label>
                    <select id="state">
                        <option value="all">All State</option>

                        {
                            indianStates.map(stateName => <option key={stateName} value={stateName}>{stateName}</option>)
                        }
                    </select>
                </div>

                <div className="searchArea__input">
                    <label htmlFor="city">City<span>*</span></label>
                    <select id="city">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
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
                {
                    showtable? <CTable /> : null
                }
            </center>

        </div>
    )
}