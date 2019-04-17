import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './component/views/Home';
import Menu from './component/common/Menu';

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
