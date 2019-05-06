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
        carry out. If you chose the Slipham scenario, you will have adopted a
        community connector character and considered the challenges you are
        going to meet. If you are imagining your own community, what are your
        problems and opportunities? Hit the back button below if you want to see
        what is happening in Slipham. Either way, here's some ideas for
        activities, before you go on to chose some methods.
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
        nextLink="/aboutMethods"
        reviewScenario={false}
      />
    </div>
  );
};
Text.propTypes = {
  fontSize: PropTypes.string,
};

export default Activities;
