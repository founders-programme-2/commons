import React from 'react';
import Header from '../../Common/Header';
import scroll from '../../../assets/scroll.svg';
import { Content } from './index.style';

const Theory = () => {
  return (
    <div>
      <Header headerImg={scroll} titleText="Theory" />
      <Content>
        In disconnected communities of any community, there will be a host of
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
        <br />
        <br />
        The <i>Commons</i> game aims to address these issues by providing a way
        to play through what activities and digital methods could be added to
        the excellent traditions of community organising, There is more on our
        <a
          href="https://www.networkedcity.london/livinglab/commons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Networked City wiki.
        </a>
        <br />
        <br />
        <ul>
          <li>Instructions on how to run the game as a Living Lab workshop</li>
          <li>
            Downloads of cards and other materials which you can print for use
            with the app
          </li>
          <li>More resources about connecting communities</li>
        </ul>
      </Content>
    </div>
  );
};

export default Theory;
