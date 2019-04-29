import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Swal from 'sweetalert2';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { PrevBtn, NextBtn } from './index.style';
import methodCardData from '../../../data/methodCardData';
import { MyContext } from '../../../Context/ContextComponent';

class PrioritiesTools extends Component {
  state = {};

  noSelectedCardsError = () => {
    const { selectedCards } = this.context;
    if (selectedCards.length === 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You must select your methods first!',
        confirmButtonText: 'OK',
      }).then(() => {
        const { history } = this.props;
        history.push('/methods');
      });
    }
  };

  render() {
    return (
      <div>
        {this.noSelectedCardsError()}
        <Header headerImg={null} titleText="Prioritize your tools" />
        <div>
          <MyContext.Consumer>
            {context => {
              const { selectedCards } = context;
              const idArray = selectedCards.map(ele => ele.id);
              const filteredCards = methodCardData.filter(card =>
                idArray.includes(card.id)
              );
              return (
                <Carousel
                  enableKeyboardControls
                  renderCenterLeftControls={({ previousSlide }) => (
                    <PrevBtn onClick={previousSlide}>.</PrevBtn>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <NextBtn onClick={nextSlide}>.</NextBtn>
                  )}
                >
                  {filteredCards.map(card => {
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
                        id={card.id}
                        tools
                        priority
                      />
                    );
                  })}
                </Carousel>
              );
            }}
          </MyContext.Consumer>
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

PrioritiesTools.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

PrioritiesTools.contextType = MyContext;

export default PrioritiesTools;
