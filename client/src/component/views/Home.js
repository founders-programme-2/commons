import React from 'react';
import Header from '../Common/Header/index';
import instructionLogo from '../../assets/instruction.svg';

const Home = () => {
  return (
    <div>
      <Header headerImg={instructionLogo} titleText="Test Header" />
      <h1>Hello from Home.js</h1>
    </div>
  );
};

export default Home;
