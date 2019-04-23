import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import CardComponent from '../MethodCard';

const Persona = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Selection your persona" />
      <CardComponent />

      <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Persona;
