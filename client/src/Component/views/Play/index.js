import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from '../../Common/Button';
import { ButtonWrapper } from './index.style';

const Play = props => {
  // eslint-disable-next-line react/prop-types
  const { history } = props;
  return (
    <div>
      <Header headerImg={null} titleText="Choose your game play" />
      <ButtonWrapper>
        <Button
          buttonText="Play a random scenario"
          onClick={() => history.push('/')}
        />
        <Button
          buttonText="Play with your own context"
          onClick={() => history.push('/')}
        />
      </ButtonWrapper>
      <Footer />
    </div>
  );
};
export default Play;
