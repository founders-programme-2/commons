import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { ContentAbout } from './index.style';
import conversation from '../../../assets/conversation.svg';

const About = () => {
  return (
    <div>
      <Header headerImg={conversation} titleText="About us" />
      <ContentAbout>
        <p>
          The Slipham social action centre is launching a Connected Commons
          programme, aiming to help people explore its heritage, find local
          opportunities and services, and support new projects for a better
          Slipham in the future. It will do this by mapping people, projects and
          groups to find what they can offer, what they need, and how they are
          connected at present. The Commons won't be just one physical space. It
          will be on-the-ground trails and gathering points, maps of who is
          doing what, a website and other communication tools, with guides for
          action. We'll have small grants to support projects, and help on fund
          raising. The overall aim is to create an environment within which
          connections and collaborations can take place - the Slipham Connected
          Commons.
        </p>
        <br />
        <p Style="font-weight:bold">
          Your goal is to select the tools that you would use to faciliate
          creating this Connected Commons Program. You have a limited amount of
          resources and must choose wisely.
        </p>
      </ContentAbout>
      <Footer />
    </div>
  );
};

export default About;
