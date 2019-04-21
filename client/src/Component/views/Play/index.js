import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const Play = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Choose your game play" />
      <h1>Choose your game play:</h1>
      <Footer backLink="/howto" nextLink="/methods" reviewScenario={false} />
    </div>
  );
};

export default Play;
