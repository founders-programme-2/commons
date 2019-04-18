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
          <Link to="./" className="menu-item">
            <Home />
            <p className="menuText">Home</p>
          </Link>
          <Link to="./about" className="menu-item">
            <About />
            <p className="menuText">About</p>
          </Link>
          <Link to="./howTo" className="menu-item">
            <HowTo />
            <p className="menuText">How-To</p>
          </Link>
          <Link to="./play" className="menu-item">
            <Play />
            <p className="menuText">Play</p>
          </Link>
          <Link to="./methods" className="menu-item">
            <Methods />
            <p className="menuText">Methods</p>
          </Link>
          <Link to="./keyTerms" className="menu-item">
            <KeyTerms />
            <p className="menuText">Key Terms</p>
          </Link>
          <Link to="./workshop" className="menu-item">
            <Workshop />
            <p className="menuText">Workshop</p>
          </Link>
          <Link to="./theory" className="menu-item">
            <Theory />
            <p className="menuText">Theory</p>
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
