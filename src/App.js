import './App.css';
import Body from './component/Body/Body';
import Navbar from './component/Navbar/Navbar';
import Volunteer from './component/Volunteer/Volunteer';
import ImpLinks from './component/Imp-Links/ImpLinks';
import Disclaimer from './component/Disclaimer/Disclaimer';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
    <Navbar/>
        <Switch>
          <Route exact path='/' component={Disclaimer}/>
          <Route exact path='/home' component={Body}/>
          <Route path='/volunteer' component={Volunteer}/>
          <Route path='/imp-links' component={ImpLinks}/>
          <Route path='/ask-for-help' component={Volunteer}/>
        </Switch>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
