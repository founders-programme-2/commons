import React from 'react';
import PropTypes from 'prop-types';
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

BannerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

BannerTitle.defaultProps = {
  subtitle: PropTypes.bool,
};

export default BannerTitle;
