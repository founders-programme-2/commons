import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { CardWrapper, Img, CardTitle } from '../MethodCard/index.style';
import logo from '../../../assets/logo.svg';

const Persona = props => {
  const { heightCard, heightImg, textAlign } = props;
  return (
    <div>
      <Header headerImg={null} titleText="Selection your persona" />
      <CardWrapper heightCard="45.5rem">
        <Img heightImg="19.6rem" src={logo} alt="PersonImg" />
        <CardTitle textAlign="center">Sarah</CardTitle>
      </CardWrapper>
      <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Persona;
