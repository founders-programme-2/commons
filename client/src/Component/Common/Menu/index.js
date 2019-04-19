import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuHover } from './index.style';
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

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <div>
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customCrossIcon={false}
          customBurgerIcon={false}
        >
          <MenuHover>
            <FontAwesomeIcon
              icon="times"
              size="5x"
              onClick={() => this.closeMenu()}
            />
          </MenuHover>
          <Link to="./" onClick={() => this.closeMenu()}>
            <Home />
            <p>Home</p>
          </Link>
          <Link to="./about" onClick={() => this.closeMenu()}>
            <About />
            <p>About</p>
          </Link>
          <Link to="./howTo" onClick={() => this.closeMenu()}>
            <HowTo />
            <p>How-To</p>
          </Link>
          <Link to="./play" onClick={() => this.closeMenu()}>
            <Play />
            <p>Play</p>
          </Link>
          <Link to="./methods" onClick={() => this.closeMenu()}>
            <Methods />
            <p>Methods</p>
          </Link>
          <Link to="./keyTerms" onClick={() => this.closeMenu()}>
            <KeyTerms />
            <p>Key Terms</p>
          </Link>
          <Link to="./workshop" onClick={() => this.closeMenu()}>
            <Workshop />
            <p>Workshop</p>
          </Link>
          <Link to="./theory" onClick={() => this.closeMenu()}>
            <Theory />
            <p>Theory</p>
          </Link>
        </Menu>
        <MenuHover>
          <FontAwesomeIcon
            icon="bars"
            size="8x"
            onClick={() => this.toggleMenu()}
          />
        </MenuHover>
      </div>
    );
  }
}

export default MenuBar;
