import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import instruction from '../../../assets/instruction.svg';

const HowTo = () => {
  return (
    <div>
      <Header headerImg={instruction} titleText="How to play" />
      <h3>How to play</h3>
      <h3>How to play</h3>
      <h3>How to play</h3>
      <h3>How to play</h3>
      <h3>How to play</h3>
      <Footer backLink="/about" nextLink="/play" reviewScenario={false} />
    </div>
  );
};

export default HowTo;
