import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import IL from './ImpLink';
import Volunteers from './Volunteers';
import AskForHelp from './AskForHelp';
import Developers from './Developers';
import TechTeam from './techTeam';
import volunteerTeam from './volunnteerTeam'
import societies from './societies';


const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/importantlinks" exact component={IL}/>
            <Route path="/volunteers" exact component={Volunteers}/>
            <Route path="/askforhelp" exact component={AskForHelp}/>
            <Route path="/ourteam" exact component={Developers}/>
            <Route path="/ourteam/techteam" exact component={TechTeam}/>
            <Route path="/ourteam/volunteerteam" exact component={volunteerTeam}/>
            <Route path="/ourteam/societies" exact component={societies}/>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;