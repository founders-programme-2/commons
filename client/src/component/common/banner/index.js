import React from 'react';
import logo from '../../../assets/logo2.svg';
import { BackgroundWrapper, TitleText, BannerLogo } from './index.style';

const BannerTitle = props => {
  return (
    <div>
      <BannerLogo src={logo} />
      <BackgroundWrapper>
        <TitleText>{props.title}</TitleText>
      </BackgroundWrapper>
    </div>
  );
};

export default BannerTitle;
