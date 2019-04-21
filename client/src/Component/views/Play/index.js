import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Button, ButtonWrapper } from './index.style';

const Play = () => {
  
  return (
    <div>
      <Header headerImg={null} titleText="Choose your game play" />
      <ButtonWrapper>
        <Button>play a random scenario</Button>
        <br />
        <Button>play with your own context</Button>
      </ButtonWrapper>
      <Footer />
    </div>
  );
};

export default Play;
