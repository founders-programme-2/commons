import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';

const Methods = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Select your methods" />
      <MethodCard cardTitle="Example Card" resourcePoints={2} cardImg={null} />
      <Footer />
    </div>
  );
};

export default Methods;
