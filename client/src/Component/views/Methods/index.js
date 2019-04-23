import React, { Component, Fragment } from 'react';
import Carousel from 'nuka-carousel';
import { Redirect } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { RemainingResources, Line, PrevBtn, NextBtn } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
    redirect: false,
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

  // checks remaining resources and triggers redirect to error page
  errorOverSpend = () => {
    const { resources } = this.state;
    if (resources > 0) {
      this.setState({
        redirect: true,
      });
    }
  };

  // renders redirect if there are no resources left
  renderRedirect = () => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/errorNoMoreResources" />;
    }
    return null;
  };

  render() {
    const { resources } = this.state;
    return (
      <Fragment>
        {this.renderRedirect()}
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
            errorOverSpend={this.errorOverSpend}
          />

          <MethodCard
            cardTitle="Example Card 2"
            resourcePoints={2}
            cardImg={null}
            chooseMethod={this.chooseMethod}
            removeMethod={this.removeMethod}
            errorOverSpend={this.errorOverSpend}
          />

          <MethodCard
            cardTitle="Example Card 3"
            resourcePoints={3}
            cardImg={null}
            chooseMethod={this.chooseMethod}
            removeMethod={this.removeMethod}
            errorOverSpend={this.errorOverSpend}
          />
        </Carousel>
        <Line />

        <RemainingResources>
          Remaining resources: <span>&nbsp;</span>
          {resources}
        </RemainingResources>

        <Footer backLink="/play" nextLink="/" reviewScenario methodBtn />
      </Fragment>
    );
  }
}

export default Methods;
