import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import IL from './ImpLink';
import Volunteers from './Volunteers';
import AskForHelp from './AskForHelp';
import Developers from './Developers'


const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/importantlinks" exact component={IL}/>
            <Route path="/volunteers" exact component={Volunteers}/>
            <Route path="/askforhelp" exact component={AskForHelp}/>
            <Route path="/developers" exact component={Developers}/>
        </Switch>
    </BrowserRouter>
    );
};

export default Routes;