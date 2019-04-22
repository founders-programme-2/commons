import React, { Component, Fragment } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { RemainingResources, Line } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
    checked: false,
  };

  // On click event, toggles 'checked' in state
  // Removes resource points from total 'resources' if checkbox is checked
  // Returns resources when checkbox is unchecked

  updateStateResources = (resourcePoints, event) => {
    const { checked } = this.state;
    let { resources } = this.state;
    this.setState({ checked: !checked });

    if (checked === false) {
      this.setState(prevState => {
        resources = prevState.resources - resourcePoints;
        return { resources };
      });
    } else {
      this.setState(prevState => {
        resources = prevState.resources + resourcePoints;
        return { resources };
      });
    }
  };

  render() {
    const { resources } = this.state;
    const { checked } = this.state;

    return (
      <Fragment>
        <Header headerImg={null} titleText="Select your methods" />
        <MethodCard
          cardTitle="Example Card"
          checked={checked}
          resourcePoints={2}
          cardImg={null}
          updateStateResources={this.updateStateResources}
        />
        <Line />
        <RemainingResources>
          Remaining resources: <span>&nbsp;</span>
          {resources}
        </RemainingResources>
        <Footer backLink="/play" nextLink="/priorities" reviewScenario />
      </Fragment>
    );
  }
}

export default Methods;
