import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';

const Methods = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Select your methods" />
      <h1>Hello from Methods.js</h1>
      <Footer backLink="/play" nextLink="/" reviewScenario />
    </div>
  );
};

export default Methods;
