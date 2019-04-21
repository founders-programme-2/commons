import React, { Component } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Button, ButtonWrapper } from './index.style';

class Play extends Component {
  state = {};

  playRandomScenario = () => {
    this.props.history.push('/');
  };

  ownContext = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Header headerImg={null} titleText="Choose your game play" />
        <ButtonWrapper>
          <Button onClick={this.playRandomScenario}>
            play a random scenario
          </Button>
          <br />
          <Button onClick={this.ownContext}>play with your own context</Button>
        </ButtonWrapper>
        <Footer />
      </div>
    );
  }
}

export default Play;
