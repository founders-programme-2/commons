import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Content } from './index.style';
import conversation from '../../../assets/conversation.svg';

const About = () => {
  return (
    <div>
      <Header headerImg={conversation} titleText="About Commons" />
      <Content>
        <p>
          This game will help you create a <i>Commons</i> - a set of places
          online and on the ground that provide an environment within which
          connections and collaboration can take place.
          <br />
          <br />
          The are two ways that you can play <i>Commons</i>.
          <br />
          <br />
          First you can play as a “community connector” using online methods and
          other activities to help people make connections, find opportunities
          in their community or network, and develop new projects and
          collaborations.
        </p>
        <br />
        <p>
          Second, you can play as a team reviewing the support that community
          connectors need, and consider how to develop a mapping, support and
          communication system. We call that team the hub, and their new system
          the community platform.
        </p>
        <br />
        <p>
          For more information on commons, hubs and platforms, see{' '}
          <Link to="/keyTerms">
            <i>Key Terms</i>.
          </Link>
        </p>
        <br />
        <p>
          The app takes you through a process that helps you simulate making
          choices. There are no “right” answers, and the app is best used to
          stimulate your thinking, and discussion with others. See{' '}
          <Link to="/theory">
            <i>Theory </i>
          </Link>
          for more.
        </p>
      </Content>
      <Footer backLink="/" nextLink="/howTo" reviewScenario={false} />
    </div>
  );
};

export default About;
