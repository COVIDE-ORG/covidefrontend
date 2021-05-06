import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../../redux/action';
import "./Tabbar";

function getTabProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Tabbar() {
    const currentTab = useSelector(state => state.currentTab);
    
    const dispatch = useDispatch();
  
    const handleChange = (_, newValue) => {
        dispatch(changeTab(newValue));
    };

    return (
        <div className="tabbar">
            <Tabs value={currentTab} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Search Data" {...getTabProps(0)} />
                <Tab label="Add Data" {...getTabProps(1)} />
            </Tabs>
            
        </div>
    )
}
