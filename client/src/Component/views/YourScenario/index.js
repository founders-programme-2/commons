import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Content } from '../About/index.style';
import houses from '../../../assets/houses.svg';

const YourScenario = () => {
  return (
    <div>
      <Header headerImg={houses} titleText="Your scenario" />
      <Content>
        <p>
          The Slipham social action centre is launching a Connected Commons
          programme, aiming to help people explore its heritage, find local
          opportunities and services, and support new projects for a better
          Slipham in the future. It will do this by mapping people, projects and
          groups to find what they can offer, what they need, and how they are
          connected at present. The Commons won&apos;t be just one physical
          space. It will be on-the-ground trails and gathering points, maps of
          doing what, a website and other communication tools, with guides for
          action. We&apos;ll have small grants to support projects, and help on
          fundraising. The overall aim is to create an environment within which
          connections and collaborations can take place - the Slipham Connected
          Commons.
        </p>
        <br />
        <p style={{ fontWeight: 'bold' }}>
          Your goal is to select the tools that you would use to faciliate
          creating this Connected Commons Program. You have a limited amount of
          resources and must choose wisely.
        </p>
      </Content>
      <Footer backLink="/play" nextLink="/" reviewScenario={false} />
    </div>
  );
};

export default YourScenario;
