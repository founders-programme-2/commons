import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import instruction from '../../../assets/instruction.svg';
import { PulpIcon, BodyWrapper, Text } from './index.style';
import instructionData from '../../../fakeData/instruction';

const HowTo = () => {
  return (
    <div>
      <Header headerImg={instruction} titleText="How to play" />
      {instructionData.map(element => {
        return (
          <BodyWrapper key={element.id}>
            <PulpIcon>
              <FontAwesomeIcon icon="lightbulb" size="5x" />
            </PulpIcon>
            <Text>{element.text}</Text>
          </BodyWrapper>
        );
      })}
      <Footer backLink="/about" nextLink="/play" reviewScenario={false} />
    </div>
  );
};

export default HowTo;
