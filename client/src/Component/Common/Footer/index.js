import React, { Component } from 'react';
import {
  Buttons,
  NextButton,
  PreviousButton,
  BackToSecnario,
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
          <BackToSecnario>Review your scenario</BackToSecnario>
          <PreviousButton type="button" />
        </Buttons>
      </React.Fragment>
    );
  }
}

export default Footer;
