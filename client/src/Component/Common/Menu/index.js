import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BurgerMenu,
  BurgerIcon,
  MenuChild,
  TopLink,
  MenuText,
  XIcon,
} from './index.style';
import {
  Home,
  About,
  HowTo,
  Play,
  Methods,
  KeyTerms,
  Workshop,
  Theory,
} from '../../../assets/menuImages/MenuImages';

class MenuBar extends Component {
  state = {
    menuOpen: false,
  };

  handleStateChange = state => {
    this.setState({ menuOpen: state.isOpen });
  };

  toggleMenu = () => {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <BurgerMenu
          right
          isOpen={menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customCrossIcon={false}
          customBurgerIcon={false}
          width="100%"
          noOverlay
        >
          <XIcon>
            <FontAwesomeIcon
              icon="times"
              size="5x"
              onClick={() => this.toggleMenu()}
            />
          </XIcon>

          <TopLink to="./" onClick={() => this.toggleMenu()}>
            <Home />
            <MenuText>Home</MenuText>
          </TopLink>

          <MenuChild to="./about" onClick={() => this.toggleMenu()}>
            <About />
            <MenuText>About</MenuText>
          </MenuChild>

          <MenuChild to="./howTo" onClick={() => this.toggleMenu()}>
            <HowTo />
            <MenuText>How-To</MenuText>
          </MenuChild>

          <MenuChild to="./play" onClick={() => this.toggleMenu()}>
            <Play />
            <MenuText>Play</MenuText>
          </MenuChild>

          <MenuChild to="./methods" onClick={() => this.toggleMenu()}>
            <Methods />
            <MenuText>Methods</MenuText>
          </MenuChild>

          <MenuChild to="./keyTerms" onClick={() => this.toggleMenu()}>
            <KeyTerms />
            <MenuText>Key Terms</MenuText>
          </MenuChild>

          <MenuChild to="./workshop" onClick={() => this.toggleMenu()}>
            <Workshop />
            <MenuText>Workshop</MenuText>
          </MenuChild>

          <MenuChild to="./theory" onClick={() => this.toggleMenu()}>
            <Theory />
            <MenuText>Theory</MenuText>
          </MenuChild>
        </BurgerMenu>
        <BurgerIcon>
          <FontAwesomeIcon
            icon="bars"
            size="7x"
            onClick={() => this.toggleMenu()}
          />
        </BurgerIcon>
      </div>
    );
  }
}

export default MenuBar;
