import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from '../../Common/Button';
import { ButtonWrapper } from './index.style';

const Play = props => {
  const { history } = props;
  return (
    <div>
      <Header headerImg={null} titleText="Choose your game play" />
      <ButtonWrapper>
        <Button
          buttonText="Play a random scenario"
          onClick={() => history.push('/')}
          height="7.5rem"
          width="20.4rem"
        />
        <Button
          buttonText="Play with your own context"
          onClick={() => history.push('/')}
          height="7.5rem"
          width="20.4rem"
        />
      </ButtonWrapper>
      <Footer backLink="/howto" nextLink={false} reviewScenario={null} />
    </div>
  );
};
Play.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
export default Play;
