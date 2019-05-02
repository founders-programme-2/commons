import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Swal from 'sweetalert2';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Link } from 'react-router-dom';
import Header from '../../Common/Header';
import MethodCard from '../MethodCard';
import { PrevBtn, NextBtn } from './index.style';
import methodCardData from '../../../data/methodCardData';
import { MyContext } from '../../../Context/ContextComponent';
import { Footer, FooterPrevious, FooterNext } from '../Methods/index.style';

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

  selectAllError = () => {
    const { selectedCards, selectedPriority, selectedTime } = this.context;
    if (
      selectedCards.length !== selectedPriority.length ||
      selectedCards.length !== selectedTime.length ||
      selectedPriority.length !== selectedTime.length
    ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You Must Select ALL Cards Prioritize and Timeline!',
        confirmButtonText: 'OK',
      });
    } else {
      const { history } = this.props;
      history.push('/summary');
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
                  checked={false}
                />
              );
            })}
          </Carousel>
        </div>
        <Footer>
          <FooterPrevious as={Link} to="/priorities" type="button" />
          <FooterNext
            as={Link}
            to="/summary"
            type="button"
            onClick={event => {
              event.preventDefault();
              this.selectAllError();
            }}
          />
        </Footer>
      </div>
    );
  }
}

PrioritiesTools.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

PrioritiesTools.contextType = MyContext;

export default PrioritiesTools;
