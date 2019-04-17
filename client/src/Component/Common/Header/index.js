import React, { Component } from 'react';
import Menu from '../Menu';
import logo from '../../../assets/logo.svg';
import { Title, Img, HeaderWrapper, Line } from './index.style';

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Img src={logo} alt="logo" />
          <Menu />
        </HeaderWrapper>
        <Line />
      </div>
    );
  }
}

export default Header;
