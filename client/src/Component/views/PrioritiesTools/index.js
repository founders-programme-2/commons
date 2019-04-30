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
    const { selectedCards } = this.context;
    const idArray = selectedCards.map(ele => ele.id);
    const filteredCards = methodCardData.filter(card =>
      idArray.includes(card.id)
    );
    return (
      <div>
        {this.noSelectedCardsError()}
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
            {filteredCards.map(card => {
              return (
                <MethodCard
                  key={card.id}
                  id={card.id}
                  cardTitle={card.cardTitle}
                  description={card.description}
                  resourcePoints={card.resourcePoints}
                  cardImg={card.cardImg}
                  difficulty={card.difficulty}
                  category={card.category}
                  requiredCards={card.requires}
                  use={card.use}
                  resources={null}
                  chooseMethod={null}
                  removeMethod={null}
                  tools
                  priority
                />
              );
            })}
          </Carousel>
        </div>
        <Footer
          backLink="/priorities"
          nextLink="/summary"
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
