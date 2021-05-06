import { Container } from '@material-ui/core';
import React from 'react';
import Tabbar from '../Tabbar/Tabbar';

import "./Body.css"

export default function Body() {
    return (
        <Container className="body">
            <Tabbar />
        </Container>
    )
}
