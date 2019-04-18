import React, { Component } from 'react';
import {
  Buttons,
  NextButton,
  PreviousButton,
  BackToSecnario,
  Line,
  FooterComponent,
} from './Footer.style';

class Footer extends Component {
  state = {};

  render() {
    return (
      <FooterComponent>
        <Line />
        <Buttons>
          <NextButton type="button" />
          <BackToSecnario>review your scenario</BackToSecnario>
          <PreviousButton type="button" />
        </Buttons>
      </FooterComponent>
    );
  }
}

export default Footer;
