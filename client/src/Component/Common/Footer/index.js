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
        <Buttons>
        {/* <Line /> */}
          <NextButton type="button" />
          <BackToSecnario>Back to secnario</BackToSecnario>
          <PreviousButton type="button" />
        </Buttons>
      </React.Fragment>
    );
  }
}

export default Footer;
