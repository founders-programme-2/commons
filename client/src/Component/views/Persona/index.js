import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Description } from './index.style';
import { CardWrapper, Img, CardTitle, Info } from '../MethodCard/index.style';
import logo from '../../../assets/logo.svg';
import Button from '../../Common/Button';

const Persona = props => {
  const { heightCard, heightImg, textAlign, heightInfoCard,widthtCard, buttonText } = props;
  return (
    <div>
      <Header headerImg={null} titleText="Selection your persona" />
      <CardWrapper heightCard="45.5rem" widthtCard="25rem">
        <Img heightImg="19.6rem" src={logo} alt="PersonImg" />
        <Info heightInfoCard="30rem">
          <CardTitle textAlign="center">Sarah</CardTitle>
          <Description>
            Is a single mun with a young baby.She would like to access the
            enternet but thinks the connections and equipment would be too
            expensive
          </Description>
        </Info>
      </CardWrapper>
      <Button buttonText="Choose" />
      <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Persona;
