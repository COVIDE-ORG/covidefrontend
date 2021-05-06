import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from '../components/LandingPage';

import { ThemeProvider } from '@material-ui/styles';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={LandingPage}
          />
          <Route
            path="/database"
            exact
            component={() => <div>database</div>}
          />
          <Route path="/volunteers" exact component={() => <div>Volunteers</div>} />
          <Route
            path="/help"
            exact
            component={() => <div>Ask for help</div>}
          />
          <Route path="/links" exact component={() => <div>links</div>} />
          <Route
            path="/customsoftware"
            exact
            component={() => <div>Custom Software</div>}
          />
          <Route
            path="/mobileapps"
            exact
            component={() => <div>Mobile Apps</div>}
          />
          <Route path="/websites" exact component={() => <div>Websites</div>} />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;