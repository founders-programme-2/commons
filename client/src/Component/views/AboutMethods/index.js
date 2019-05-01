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
          As a community connector, you will be planning some activities to meet
          the challenges you address. Some you can undertake yourself - some
          might require development work by the hub team developing the mapping
          and communication platform. Activities might include mapping local
          people and organisation; making connections; helping develop projects;
          sharing information and ideas; telling stories; managing more
          effectively. We can provide you with some ideas about the methods that
          could be useful to support these activities. The methods are
          categorised around:
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
