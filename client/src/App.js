import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

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
import Challenges from './Component/views/Challenges';
import PrioritiesTools from './Component/views/PrioritiesTools';
import Credits from './Component/views/Credits';
import Summary from './Component/views/Summary';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <MyProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            <Route path="/howTo" component={HowTo} />
            <Route path="/play" component={Play} />
            <Route path="/methods" component={Methods} />
            <Route path="/keyTerms" component={KeyTerms} />
            <Route path="/workshop" component={Workshop} />
            <Route path="/theory" component={Theory} />
            <Route path="/priorities" component={Priorities} />
            <Route path="/priority-tools" component={PrioritiesTools} />
            <Route path="/summary" component={Summary} />
            <Route path="/error404" component={Error404} />
            <Route path="/yourScenario" component={YourScenario} />
            <Route path="/challenges" component={Challenges} />
            <Route path="/credits" component={Credits} />
            <Redirect to="/error404" />
          </Switch>
        </MyProvider>
      </BrowserRouter>
    );
  }
}

export default App;
