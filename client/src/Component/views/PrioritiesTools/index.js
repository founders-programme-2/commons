import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { PrevBtn, NextBtn } from './index.style';
import methodCardData from '../../../fakeData/methodCardData';

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
            {methodCardData.map(card => {
              return (
                <MethodCard
                  key={card.id}
                  cardTitle={card.cardTitle}
                  description={card.description}
                  resourcePoints={card.resourcePoints}
                  cardImg={card.cardImg}
                  difficulty={card.difficulty}
                  category={card.category}
                  requiredCards={card.requires}
                  use={card.use}
                  chooseMethod={null}
                  removeMethod={null}
                  errorOverSpend={null}
                  tools
                  priority
                />
              );
            })}
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
