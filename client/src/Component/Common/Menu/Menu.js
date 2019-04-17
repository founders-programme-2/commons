import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
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

export default props => {
  return (
    <Menu right className="wrapper-menu" {...props}>
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
  );
};
