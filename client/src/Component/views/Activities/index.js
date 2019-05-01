import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import activities from '../../../data/activities';
import { PulpIcon, Text } from '../HowTo/index.style';
import { BodyWrapper, ActWrap, ActText, ActTitle } from './index.style';
import challenge from '../../../assets/challenge.svg';

const Activities = () => {
  return (
    <div>
      <Header headerImg={challenge} titleText="Activities" />
      <br />
      <br />
      <Text>
        Now that you have become a community connector, and identifed some
        challenges you are going to meet, here are some ideas for activities you
        carry out.
      </Text>
      {activities.map(element => {
        return (
          <BodyWrapper key={element.id}>
            <ActWrap>
              <PulpIcon>
                <FontAwesomeIcon icon="check" size="5x" />
              </PulpIcon>
              <ActTitle>{element.title}</ActTitle>
            </ActWrap>
            <ActText fontSize="1.8rem">{element.text}</ActText>
          </BodyWrapper>
        );
      })}
      <Footer
        backLink="/yourScenario"
        nextLink="/methods"
        reviewScenario={false}
      />
    </div>
  );
};
Text.propTypes = {
  fontSize: PropTypes.string,
};

export default Activities;
