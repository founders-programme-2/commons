import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import scroll from '../../../assets/scroll.svg';
import { Content } from '../About/index.style';

const Theory = () => {
  return (
    <div>
      <Header headerImg={scroll} titleText="Theory behind the game" />
      <Content>
        Disconnected communities In any community there will be a host of
        problems, different organisations and groups seeking to address them,
        gathering places for conversation and events, and a local council
        struggling its citizens while facing cuts to its funding from
        government. Some places are of course richer than others - in local
        wealth, community groups and charities, and service. However all
        communities will have an undiscovered wealth of assets simply because
        there may be places that could be better used, tools and skills that
        could be shared, people who might help each other more given the
        opportunity. What we need are maps to reveal the places, interests,
        wants and offers - and ways to connect people and places, and reveal how
        we can best use our assets.
      </Content>
      <Footer />
    </div>
  );
};

export default Theory;
