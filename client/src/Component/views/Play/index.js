import React, { Fragment } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from '../../Common/Button';
import {
  ButtonWrapper,
  FooterStyle,
  ContentWrapper,
  Wrapper,
} from './index.style';

const Play = props => {
  const { history } = props;
  return (
    <Fragment>
      <Wrapper>
        <Header headerImg={null} titleText="Choose your game play" />
        <ContentWrapper>
          <ButtonWrapper>
            <Button
              buttonText="Play Slipham scenario"
              onClick={() => history.push('/yourScenario')}
              height="7.5rem"
              width="20.4rem"
            />
            <Button
              buttonText="Play imagining your own community"
              onClick={() => history.push('/activities')}
              height="7.5rem"
              width="20.4rem"
            />
          </ButtonWrapper>
        </ContentWrapper>
        <FooterStyle>
          <Footer backLink="/howto" nextLink={null} reviewScenario={null} />
        </FooterStyle>
      </Wrapper>
    </Fragment>
  );
};
Play.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default Play;
