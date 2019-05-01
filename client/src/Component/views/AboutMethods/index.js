import React, { Fragment } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Content } from '../About/index.style';

const AboutMethods = () => {
  return (
    <Fragment>
      <Header headerImg={null} titleText="Choosing Methods" />
      <Content>
        <p>
          Now that you know your challenges and potential activities, you will
          start to choose your methods. The methods are categorised around:
        </p>
        <ul>
          <li>Finding</li>
          <li>Sharing</li>
          <li>Collaborating</li>
          <li>Managing</li>
        </ul>
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
