import { Container } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import AskForHelp from '../AskForHelp/AskForHelp';
import SearchArea from '../SearchArea/SearchArea';
import Tabbar from '../Tabbar/Tabbar';
import CTable from '../Table/table.component';
import Tabpage from '../Tabpage/Tabpage';

import "./Body.css"

export default function Body() {
    const state = useSelector(state => state);

    return (
        <Container className={`body__main ${state.isTable && 'body__withTable'}`}>
            <Tabbar />
            <Tabpage value={state.currentTab} index={0}>
                <SearchArea />
                <div className='table'>
                    {
                        state.isTable ? <CTable /> : null
                    }
                </div>
            </Tabpage>
            <Tabpage value={state.currentTab} index={1}>
                second page
            </Tabpage>
        </Container>
    )
}
