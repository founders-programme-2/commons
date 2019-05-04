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
        <i> Commons</i> for your community. If possible print off the cards, and
        discuss with others. Have a pen and paper, or a flip chart on hand to
        note ideas, insights and results. Material and instructions are on the{' '}
        <a
          href="https://www.networkedcity.london/livinglab/commons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Networked City wiki.
        </a>
        <br />
        <br />
        Throughout the game, you will be asked to:{' '}
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
