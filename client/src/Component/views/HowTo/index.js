import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import instruction from '../../../assets/instruction.svg';
import { PulpIcon, BodyWrapper, Text } from './index.style';
import instructionData from '../../../data/instruction';

const HowTo = () => {
  return (
    <Fragment>
      <Header headerImg={instruction} titleText="How to play" />
      <br />
      <Text>
        The game will lead you through a series of choices and reflective
        periods where you will address some of the challenges of creating a
        <i> Commons</i> for your community. Throughout the game, you will be
        asked to:{' '}
      </Text>
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
    </Fragment>
  );
};

export default HowTo;
