import React, { Component } from 'react';
import {
  Buttons,
  NextButton,
  PreviousButton,
  BackToSecnario,
} from './Footer.style';

class Footer extends Component {
  state = {};

  render() {
    return (
      <Buttons>
        <NextButton type="button" />
        <BackToSecnario type="button" />
        <PreviousButton type="button" />
      </Buttons>
    );
  }
}

export default Footer;
