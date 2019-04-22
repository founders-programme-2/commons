import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import houses from '../../../assets/houses.svg';

const YourScenario = () => {
  return (
    <div>
      <Header headerImg={houses} titleText="Your scenario" />
      <Footer />
    </div>
  );
};

export default YourScenario;
