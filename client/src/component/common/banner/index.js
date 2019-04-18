import React from 'react';
import logo from '../../../assets/logo2.svg';
import { BackgroundWrapper, TitleText, BannerLogo } from './index.style';

const BannerTitle = ({title}) => {
  return (
    <div>
      <BannerLogo src={logo} />
      <BackgroundWrapper>
        <TitleText>{title}</TitleText>
      </BackgroundWrapper>
    </div>
  );
};

export default BannerTitle;
