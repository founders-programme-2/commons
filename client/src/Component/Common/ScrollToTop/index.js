// solution from StackOverflow: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTopRoute extends Component {
  componentDidUpdate(prevProps) {
    const { path } = this.props;
    const { pathname: locationPath } = this.props.location;
    const { pathname: prevPath } = prevProps.location;

    if (path === locationPath && locationPath !== prevPath) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

export default withRouter(ScrollToTopRoute);
