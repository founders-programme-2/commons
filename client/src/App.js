import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Footer from './Component/Common/Footer';
import Menu from './Component/Common/Menu/Menu';

// burger menu components
import Landing from './Component/views/Landing';
import About from './Component/views/About/index';
import HowTo from './Component/views/HowTo';
import Play from './Component/views/Play';
import Methods from './Component/views/Methods';
import KeyTerms from './Component/views/KeyTerms';
import Workshop from './Component/views/Workshop';
import Theory from './Component/views/Theory';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/howTo" component={HowTo} />
          <Route path="/play" component={Play} />
          <Route path="/methods" component={Methods} />
          <Route path="/keyTerms" component={KeyTerms} />
          <Route path="/workshop" component={Workshop} />
          <Route path="/theory" component={Theory} />
          <Route path="/footer" component={Footer} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
