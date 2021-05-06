import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Tabbar from '../Tabbar/Tabbar';
import Tabpage from '../Tabpage/Tabpage';

import "./Body.css"

export default function Body() {
    const currentTab = useSelector(state => state.currentTab);

    return (
        <Container className="body">
            <Tabbar />
            <Tabpage value={currentTab} index={0}>
                Page One
            </Tabpage>
            <Tabpage value={currentTab} index={1}>
                Page Two
            </Tabpage>
        </Container>
    )
}
