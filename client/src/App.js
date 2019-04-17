import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

// burger menu components
import Menu from './component/common/Menu';
import Home from './component/views/Home';
import About from './component/views/About';
import HowTo from './component/views/HowTo';
import Play from './component/views/Play';
import Methods from './component/views/Methods';
import KeyTerms from './component/views/KeyTerms';
import Workshop from './component/views/Workshop';
import Theory from './component/views/Theory';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/howTo" component={HowTo} />
          <Route path="/play" component={Play} />
          <Route path="/methods" component={Methods} />
          <Route path="/keyTerms" component={KeyTerms} />
          <Route path="/workshop" component={Workshop} />
          <Route path="/theory" component={Theory} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
