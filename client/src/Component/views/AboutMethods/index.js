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
          In order to understand what collaborative tools may be useful, we need
          to think on at least two dimensions:
        </p>
        <ul>
          <li>
            Who will use them, and where. For example by individuals on their
            phones; in groups working on projects; or more widely in social
            networks.
          </li>
          <li>
            The main purpose of the tool: for finding information; sharing
            privately; sharing publicly; for supporting cooperation and
            collaboration; for managing and facilitating.
          </li>
        </ul>
        <p>
          Now that you know your challenges and potential activities, you will
          tailor a toolkit of methods for your situation. The methods are
          categorised around:
        </p>
        <ul>
          <li>Finding</li>
          <li>Sharing</li>
          <li>Collaborating</li>
          <li>Managing</li>
        </ul>
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
