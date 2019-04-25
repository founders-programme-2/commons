import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// error pages
import Error404 from './Component/views/Error404';
import ErrorResources from './Component/views/ErrorResources';
import ErrorNoMoreResources from './Component/views/ErrorNoMoreResources';

// burger menu components
import Landing from './Component/views/Landing';
import About from './Component/views/About';
import HowTo from './Component/views/HowTo';
import Play from './Component/views/Play';
import Methods from './Component/views/Methods';
import KeyTerms from './Component/views/KeyTerms';
import Workshop from './Component/views/Workshop';
import Theory from './Component/views/Theory';
import Priorities from './Component/views/Priorities';
import PrioritiesTools from './Component/views/PrioritiesTools';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
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
          <Route path="/error404" component={Error404} />
          <Route path="/errorResources" component={ErrorResources} />
          <Route
            path="/errorNoMoreResources"
            component={ErrorNoMoreResources}
          />
          <Redirect to="/error404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
