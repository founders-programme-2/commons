import React from 'react';
import logo from '../../../assets/logo2.svg';
import {
  BackgroundWrapper,
  TitleText,
  TitleTextSub,
  BannerLogo,
  SubtitleText,
} from './index.style';

const BannerTitle = ({ title, subtitle }) => {
  if (subtitle) {
    return (
      <div>
        <BannerLogo src={logo} />
        <BackgroundWrapper>
          <TitleTextSub>{title}</TitleTextSub>
          <SubtitleText>{subtitle}</SubtitleText>
        </BackgroundWrapper>
      </div>
    );
  }
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
