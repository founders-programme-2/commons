import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { RemainingResources, Line, PrevBtn, NextBtn } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
  };

  // Removes resource points from total 'resources' if checkbox is checked
  removeMethod = (points, event) => {
    this.setState(state => {
      const resources = state.resources - points;
      return { resources };
    });
  };

  // Returns resources when checkbox is unchecked
  chooseMethod = (points, event) => {
    let { resources } = this.state;
    this.setState(nextState => {
      resources = nextState.resources + points;
      return { resources };
    });

  };

  render() {
    const { resources } = this.state;
    return (
      <Fragment>
        <Header headerImg={null} titleText="Select your methods" />
        <Carousel
          enableKeyboardControls
          renderCenterLeftControls={({ previousSlide }) => (
            <PrevBtn onClick={previousSlide}>.</PrevBtn>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <NextBtn onClick={nextSlide}>.</NextBtn>
          )}
        >
          <MethodCard
            cardTitle="Example Card 1"
            resourcePoints={1}
            cardImg={null}
            chooseMethod={this.chooseMethod}
            removeMethod={this.removeMethod}
          />

          <MethodCard
            cardTitle="Example Card 2"
            resourcePoints={2}
            cardImg={null}
            chooseMethod={this.chooseMethod}
            removeMethod={this.removeMethod}
          />

          <MethodCard
            cardTitle="Example Card 3"
            resourcePoints={3}
            cardImg={null}
            chooseMethod={this.chooseMethod}
            removeMethod={this.removeMethod}
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
