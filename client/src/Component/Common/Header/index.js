import React, { Component } from 'react';
import Menu from '../Menu';
import logo from '../../../assets/logo.svg';
import InstructionLogo from '../../../assets/instruction.svg';
import {
  Title,
  Logo,
  HeaderWrapper,
  Line,
  HeaderImg,
  HeaderTitle,
} from './index.style';

class Header extends Component {
  state = {};

  render() {
    return (
      <div>
        <HeaderWrapper>
          <Logo src={logo} alt="logo" />
          <Menu />
        </HeaderWrapper>
        <Line />
        <HeaderTitle>
          <HeaderImg src={InstructionLogo} alt="header-img" />
          <Title>How to play</Title>
        </HeaderTitle>
        <Line />
      </div>
    );
  }
}

export default Header;
