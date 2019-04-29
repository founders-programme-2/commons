import React, { Component, Fragment } from 'react';
import Carousel from 'nuka-carousel';
import { Redirect, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../Common/Header';
import MethodCard from '../MethodCard';
import methodCardData from '../../../fakeData/methodCardData';
import {
  RemainingResources,
  Line,
  PrevBtn,
  NextBtn,
  Footer,
  FooterPrevious,
  FooterNext,
  BackToScenario,
} from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
    redirect: false,
    data: methodCardData,
  };

  // Renders method cards dynamically
  renderMethodCards = () => {
    const { data } = this.state;
    return data.map(card => {
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
          chooseMethod={this.chooseMethod}
          removeMethod={this.removeMethod}
          id={card.id}
          tools={false}
          priority={false}
        />
      );
    });
  };

  // Removes resource points from total 'resources' if checkbox is checked
  removeMethod = (points, event) => {
    this.setState(state => {
      const resources = state.resources - points;
      return { resources };
    });
  };

  // Returns resources when checkbox is unchecked
  chooseMethod = (points, event) => {
    let { resources } = this.state;
    this.setState(nextState => {
      resources = nextState.resources + points;
      return { resources };
    });
  };

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
    const { resources } = this.state;
    return (
      <Fragment>
        {this.renderRedirect()}
        <Header headerImg={null} titleText="Select your methods" />
        <Carousel
          wrapAround
          enableKeyboardControls
          renderCenterLeftControls={({ previousSlide }) => (
            <PrevBtn onClick={previousSlide}>.</PrevBtn>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <NextBtn onClick={nextSlide}>.</NextBtn>
          )}
        >
          {this.renderMethodCards()}
        </Carousel>
        <Line />

        <RemainingResources>
          Remaining resources: <span>&nbsp;</span>
          {resources}
        </RemainingResources>

        <Line />
        <Footer>
          <FooterPrevious as={Link} to="./play" type="button" />
          <BackToScenario>
            Review <br />
            Scenario
          </BackToScenario>
          <FooterNext as={Link} to="/priorities" type="button" onClick={this./>
        </Footer>
      </Fragment>
    );
  }
}

export default Methods;
