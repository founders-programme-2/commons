import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { CardWrapper } from '../MethodCard/index.style';

const Persona = () => {
  // const { cardImg } = props
  return (
    <div>
      <Header headerImg={null} titleText="Selection your persona" />
      <CardWrapper>
        <div>Haneen</div>
      </CardWrapper>
      <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Persona;
