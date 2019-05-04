import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuBar from '../Menu';
import logo2 from '../../../assets/logo2.svg';
import {
  Title,
  Logo,
  HeaderWrapper,
  Line,
  HeaderImg,
  HeaderTitle,
} from './index.style';

const Header = props => {
  const { headerImg, titleText } = props;

  return (
    <div>
      <HeaderWrapper>
        <Link to="/">
          <Logo src={logo2} alt="Commons network logo" />
        </Link>
        <MenuBar />
      </HeaderWrapper>
      <Line />

      {headerImg ? (
        <HeaderTitle>
          <HeaderImg src={headerImg} alt="header-img" />
          <Title>{titleText}</Title>
        </HeaderTitle>
      ) : (
        <HeaderTitle>
          <Title>{titleText}</Title>
        </HeaderTitle>
      )}

      <Line />
    </div>
  );
};

Header.propTypes = {
  headerImg: PropTypes.string,
  titleText: PropTypes.string.isRequired,
};

Header.defaultProps = {
  headerImg: PropTypes.bool,
};

export default Header;
