import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import challenges from '../../../fakeData/challenges';
import { PulpIcon, BodyWrapper, Text } from '../HowTo/index.style';
import challenge from '../../../assets/challenge.svg';

const Challenges = () => {
  // const { fontSize } = props;
  return (
    <div>
      <Header headerImg={challenge} titleText=" Your challenge" />
      {challenges.map(element => {
        return (
          <BodyWrapper key={element.id}>
            <PulpIcon>
              <FontAwesomeIcon icon="lightbulb" size="5x" />
            </PulpIcon>
            <Text fontSize="1.8rem">{element.text}</Text>
          </BodyWrapper>
        );
      })}
      <Footer backLink="/" nextLink="/methods" reviewScenario={false} />
    </div>
  );
};
Text.propTypes = {
  fontSize: PropTypes.string,
};

export default Challenges;
