import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import challenges from '../../../fakeData/challenges';
import { PulpIcon, BodyWrapper, Text } from '../HowTo/index.style';
import challenge from '../../../assets/challenge.svg';

const Challenges = () => {
  return (
    <div>
      <Header headerImg={challenge} titleText=" Your challenge" />
      {challenges.map(element => {
        return (
          <BodyWrapper key={element.id}>
            <PulpIcon>
              <FontAwesomeIcon icon="lightbulb" size="5x" />
            </PulpIcon>
            <Text>{element.text}</Text>
          </BodyWrapper>
        );
      })}
      <Footer backLink="/" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default Challenges;
