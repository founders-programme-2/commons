import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// component to scroll to top when loading new routes
import ScrollToTopRoute from './Component/Common/ScrollToTop';

// context
import { MyProvider } from './Context/ContextComponent';

// error pages
import Error404 from './Component/views/Error404';

// burger menu components
import Landing from './Component/views/Landing';
import About from './Component/views/About';
import HowTo from './Component/views/HowTo';
import Play from './Component/views/Play';
import Methods from './Component/views/Methods';
import KeyTerms from './Component/views/KeyTerms';
import Workshop from './Component/views/Workshop';
import Theory from './Component/views/Theory';
import YourScenario from './Component/views/YourScenario';
import Priorities from './Component/views/Priorities';
import Activities from './Component/views/Activities';
import PrioritiesTools from './Component/views/PrioritiesTools';
import Credits from './Component/views/Credits';
import Summary from './Component/views/Summary';

import AboutMethods from './Component/views/AboutMethods';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <MyProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <ScrollToTopRoute path="/about" component={About} />
            <ScrollToTopRoute path="/howTo" component={HowTo} />
            <ScrollToTopRoute path="/play" component={Play} />
            <ScrollToTopRoute path="/methods" component={Methods} />
            <ScrollToTopRoute path="/keyTerms" component={KeyTerms} />
            <ScrollToTopRoute path="/workshop" component={Workshop} />
            <ScrollToTopRoute path="/theory" component={Theory} />
            <ScrollToTopRoute path="/priorities" component={Priorities} />
            <ScrollToTopRoute
              path="/priority-tools"
              component={PrioritiesTools}
            />
            <ScrollToTopRoute path="/summary" component={Summary} />
            <ScrollToTopRoute path="/error404" component={Error404} />
            <ScrollToTopRoute path="/yourScenario" component={YourScenario} />
<<<<<<< HEAD
            <ScrollToTopRoute path="/activities" component={Activities} />
            <ScrollToTopRoute path="/aboutMethods" component={AboutMethods} />
||||||| merged common ancestors
            <ScrollToTopRoute path="/challenges" component={Challenges} />
=======
            <RouScrollToTopRoutete path="/activities" component={Activities} />
            <ScrollToTopRoute path="/aboutMethods" component={AboutMethods} />
>>>>>>> 39cb4b49c74fe3bfa774298cae3c01f2cd141fa7
            <ScrollToTopRoute path="/credits" component={Credits} />
            <Redirect to="/error404" />
          </Switch>
        </MyProvider>
      </BrowserRouter>
    );
  }
}

export default App;
