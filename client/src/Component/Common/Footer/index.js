import React, { Component } from 'react';
import {
  Buttons,
  NextButton,
  PreviousButton,
  BackToScenerio,
  Line,
} from './Footer.style';

class Footer extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Line />
        <Buttons>
          <NextButton type="button" />
          <BackToScenerio>Review your scenario</BackToScenerio>
          <PreviousButton type="button" />
        </Buttons>
      </React.Fragment>
    );
  }
}

export default Footer;
