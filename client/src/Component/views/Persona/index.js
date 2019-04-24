import React from 'react';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Description } from './index.style';
import { CardWrapper, Img, CardTitle, Info } from '../MethodCard/index.style';
import Button from '../../Common/Button';
import PersonaData from '../../../fakeData/persona';

const Persona = props => {
  const { heightCard, heightImg, textAlign, heightInfoCard,widthtCard, buttonText } = props;
  return (
    <div>
      <Header headerImg={null} titleText="Selection your persona" />
      <Carousel>
        {PersonaData.map(element => {
          return (
            <CardWrapper
              heightCard="45.5rem"
              widthtCard="25rem"
              key={element.id}
            >
              <Img heightImg="19.6rem" src={element.img} alt="PersonImg" />
              <Info heightInfoCard="30rem">
                <CardTitle textAlign="center">{element.title}</CardTitle>
                <Description>{element.text}</Description>
              </Info>
            </CardWrapper>
          );
      })}
      </Carousel>
      <Button buttonText="Choose" />
      <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Persona;
