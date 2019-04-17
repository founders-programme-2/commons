import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.header`
  background-color: #ffc729;
  transform: skewY(-15deg);
  height: 20vh;
`;

const TitleText = styled.h1`
  font-weight: bold;
  transform: skewY(15deg);
  padding: 5%;
`;

const BannerTitle = props => {
  return (
    <BackgroundWrapper>
      <TitleText>{props.title}</TitleText>
    </BackgroundWrapper>
  );
};

export default BannerTitle;
