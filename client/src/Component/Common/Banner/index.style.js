import styled from 'styled-components';

export const BackgroundWrapper = styled.header`
  background: rgba(241, 231, 103, 1);
  background: -moz-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(241, 231, 103, 1)),
    color-stop(100%, rgba(255, 199, 41, 1))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(241, 231, 103, 1) 0%,
    rgba(255, 199, 41, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f1e767', endColorstr='#ffc729', GradientType=1 );
  transform: skewY(-12deg);
  height: 21rem;
  padding: 0;
  margin: -2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.h1`
  font-weight: bold;
  transform: skewY(12deg);
  padding: 5%;
  margin: auto auto;
  display: block;
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  color: #000000;

  @media (max-width: 360px) {
    h1 {
      font-size: 5rem;
    }
  }
`;

export const TitleTextSub = styled.h1`
  font-weight: bold;
  transform: skewY(12deg);
  padding: 5% 5% 0% 5%;
  margin: auto auto;
  display: block;
  text-align: center;
  font-size: 6rem;
  line-height: 4.5rem;
  font-weight: 700;
  color: #000000;
`;

export const SubtitleText = styled.h2`
  transform: skewY(12deg);
  margin: 0 5% 12%;
  display: block;
  text-align: center;
  font-size: 1.8rem;
  font-weight: 100;
  color: #000000;
  font: 'Open Sans';
`;

export const BannerLogo = styled.img`
  display: block;
  margin: 4rem auto;
`;

export const BannerWrapper = styled.div`
  height: 100%;
`;
