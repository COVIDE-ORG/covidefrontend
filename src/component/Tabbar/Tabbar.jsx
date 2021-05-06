import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import Tabpage from '../Tabpage/Tabpage';
import "./Tabbar";

function getTabProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Tabbar() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className="tabbar">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Search Data" {...getTabProps(0)} />
                <Tab label="Add Data" {...getTabProps(1)} />
            </Tabs>
            <Tabpage value={value} index={0}>
                Page One
            </Tabpage>
            <Tabpage value={value} index={1}>
                Page Two
            </Tabpage>
        </div>
    )
}
