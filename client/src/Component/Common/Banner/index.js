import React from 'react';
import PropTypes from 'prop-types';
import logo2 from '../../../assets/logo2.svg';
import {
  BackgroundWrapper,
  TitleText,
  TitleTextSub,
  BannerLogo,
  SubtitleText,
  BannerWrapper,
} from './index.style';

const BannerTitle = ({ title, subtitle }) => {
  if (subtitle) {
    return (
      <BannerWrapper>
        <BannerLogo src={logo2} />
        <BackgroundWrapper>
          <TitleTextSub>{title}</TitleTextSub>
          <SubtitleText>{subtitle}</SubtitleText>
        </BackgroundWrapper>
      </BannerWrapper>
    );
  }
  return (
    <BannerWrapper>
      <BannerLogo src={logo2} />
      <BackgroundWrapper>
        <TitleText>{title}</TitleText>
      </BackgroundWrapper>
    </BannerWrapper>
  );
};

BannerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

BannerTitle.defaultProps = {
  subtitle: PropTypes.bool,
};

export default BannerTitle;
