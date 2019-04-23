import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import numbered from '../../../assets/numbered.svg';
import { Text } from './index.style';

const Priorities = () => {
  return (
    <div>
      <Header headerImg={numbered} titleText="Priorities &Timeline" />
      <Text>
        These are some notes on priorities and timelining & instructions for the
        next step.
      </Text>
      <Footer backLink="/methods" nextLink="/" reviewScenario={null} />
    </div>
  );
};

export default Priorities;
