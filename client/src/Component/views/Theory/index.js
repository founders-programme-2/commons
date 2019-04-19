import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import scroll from '../../../assets/scroll.svg';

const Theory = () => {
  return (
    <div>
      <Header headerImg={scroll} titleText="Theory behind the game" />
      <h1>Hello from Theory.js</h1>
      <Footer />
    </div>
  );
};

export default Theory;
