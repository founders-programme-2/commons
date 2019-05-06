import React, { Fragment } from 'react';

import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Content } from '../About/index.style';
import { ListEle, StyledUl, Line } from './index.style';
import idea from '../../../assets/001-idea.svg';
import analysis from '../../../assets/002-analysis.svg';
import collaboration from '../../../assets/003-collaboration.svg';
import meeting from '../../../assets/004-meeting.svg';
import speaker from '../../../assets/005-speaker.svg';

const AboutMethods = () => {
  return (
    <Fragment>
      <Header headerImg={idea} titleText="Choosing Methods" />
      <Content>
        <p>
          In order to understand what collaborative tools may be useful, we need
          to think on at least two dimensions:
        </p>
        <ul>
          <ListEle>
            <p>Who will use them, and where</p>
          </ListEle>
          <ListEle>
            For example - individuals on their phones; in groups working on
            projects; or more widely in social networks.
          </ListEle>
          <ListEle>
            <p>The main purpose of the tool</p>
          </ListEle>
          <ListEle>
            For example - for finding information; sharing privately; sharing
            publicly; for supporting cooperation and collaboration; for managing
            and facilitating.
          </ListEle>
        </ul>
        <Line />
        <p>
          Now that you know your challenges and potential activities, you will
          tailor a toolkit of methods for your situation. The methods are
          categorised around:
        </p>
        <StyledUl>
          <ListEle>
            <img src={analysis} alt="magnifying glass" width="30" />{' '}
            <p>Finding</p>
          </ListEle>
          <ListEle>
            <img src={meeting} alt="people sharing" width="30" /> <p>Sharing</p>
          </ListEle>
          <ListEle>
            <img src={collaboration} alt="people sharing ideas" width="30" />{' '}
            <p>Collaborating</p>
          </ListEle>
          <ListEle>
            <img src={speaker} alt="manager" width="30" /> <p>Managing</p>
          </ListEle>
        </StyledUl>
        <p>
          Think carefully about how each method relates to your persona,
          challenges and activities. You have a budget of 15 resources. Each
          method has a cost represented in stars. Spend your budget wisely and
          feel free to review your scenario at any time.
        </p>
      </Content>
      <Footer
        backLink="/activities"
        nextLink="/methods"
        reviewScenario={false}
      />
    </Fragment>
  );
};

export default AboutMethods;
