import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { PrevBtn, NextBtn } from './index.style';

class PrioritiesTools extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header headerImg={null} titleText="Prioritize your tools" />
        <div>
          <Carousel
            enableKeyboardControls
            renderCenterLeftControls={({ previousSlide }) => (
              <PrevBtn onClick={previousSlide}>.</PrevBtn>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <NextBtn onClick={nextSlide}>.</NextBtn>
            )}
          >
            <MethodCard
              cardTitle="Example Card 1"
              resourcePoints={1}
              cardImg={null}
              chooseMethod={null}
              removeMethod={null}
              errorOverSpend={null}
              tools
              priority
            />
          </Carousel>
        </div>
        <Footer
          backLink="/priorities"
          nextLink="/priorities"
          reviewScenario={null}
        />
      </div>
    );
  }
}

export default PrioritiesTools;
