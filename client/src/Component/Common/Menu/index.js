import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuHover, MenuWrapper, LinkSty, TopLink, P } from './index.style';
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
        <Menu
          right
          isOpen={menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          customCrossIcon={false}
          customBurgerIcon={false}
          width="100%"
        >
          <MenuWrapper>
            <MenuHover>
              <FontAwesomeIcon
                icon="times"
                size="5x"
                onClick={() => this.toggleMenu()}
              />
            </MenuHover>

            <TopLink to="./" onClick={() => this.toggleMenu()}>
              <Home />
              <P>Home</P>
            </TopLink>

            <LinkSty to="./about" onClick={() => this.toggleMenu()}>
              <About />
              <P>About</P>
            </LinkSty>

            <LinkSty to="./howTo" onClick={() => this.toggleMenu()}>
              <HowTo />
              <P>How-To</P>
            </LinkSty>
            <LinkSty to="./play" onClick={() => this.toggleMenu()}>
              <Play />
              <P>Play</P>
            </LinkSty>
            <LinkSty to="./methods" onClick={() => this.toggleMenu()}>
              <Methods />
              <P>Methods</P>
            </LinkSty>
            <LinkSty to="./keyTerms" onClick={() => this.toggleMenu()}>
              <KeyTerms />
              <P>Key Terms</P>
            </LinkSty>
            <LinkSty to="./workshop" onClick={() => this.toggleMenu()}>
              <Workshop />
              <P>Workshop</P>
            </LinkSty>
            <LinkSty to="./theory" onClick={() => this.toggleMenu()}>
              <Theory />
              <P>Theory</P>
            </LinkSty>
          </MenuWrapper>
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
