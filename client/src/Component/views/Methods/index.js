import React, { Component, Fragment } from 'react';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { RemainingResources, Line } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
  };

  // On click event, toggles 'checked' in state
  // Removes resource points from total 'resources' if checkbox is checked
  // Returns resources when checkbox is unchecked

  updateStateResources = (resourcePoints, event) => {
    let { resources } = this.state;
    this.setState(prevState => {
      resources = prevState.resources - resourcePoints;
      return { resources };
    });
  };

  render() {
    const { resources } = this.state;
    return (
      <Fragment>
        <Header headerImg={null} titleText="Select your methods" />
        <Carousel>
          <MethodCard
            cardTitle="Example Card 1"
            resourcePoints={1}
            cardImg={null}
            updateStateResources={this.updateStateResources}
          />

          <MethodCard
            cardTitle="Example Card 2"
            resourcePoints={2}
            cardImg={null}
            updateStateResources={this.updateStateResources}
          />

          <MethodCard
            cardTitle="Example Card 3"
            resourcePoints={3}
            cardImg={null}
            updateStateResources={this.updateStateResources}
          />
        </Carousel>
        <Line />

        <RemainingResources>
          Remaining resources: <span>&nbsp;</span>
          {resources}
        </RemainingResources>

        <Footer backLink="/play" nextLink="/" reviewScenario />
      </Fragment>
    );
  }
}

export default Methods;
