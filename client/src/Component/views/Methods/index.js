import React, { Component, Fragment } from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../../Common/Header';
import MethodCard from '../MethodCard';
import methodCardData from '../../../data/methodCardData';
import { MyContext } from '../../../Context/ContextComponent';
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
          // chooseMethod={this.chooseMethod}
          // removeMethod={this.removeMethod}
          noMoreResources={this.noMoreResources}
          id={card.id}
          tools={false}
          priority={false}
        />
      );
    });
  };

  // Triggers if you try and overspend your resources
  noMoreResources = () => {
    Swal.fire({
      type: 'error',
      title: 'Oops!',
      text: "You don't have enough resources!",
      confirmButtonText: 'Go back and edit your selection.',
      confirmButtonColor: '#faa634',
      showCancelButton: true,
      cancelButtonText: "Let's move on.",
    }).then(value => {
      const { history } = this.props;
      if (value.dismiss === 'cancel') {
        history.push('/priorities');
      } else if (value.value === true) {
        history.push('/methods');
      }
    });
  };

  // Triggers alerts on next click
  nextAlerts = (selectedCards, resources) => {
    if (selectedCards.length === 0) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'You must select your methods first!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#faa634',
      }).then(() => {
        const { history } = this.props;
        history.push('/methods');
      });
    } else if (resources > 0) {
      Swal.fire({
        type: 'info',
        title: 'Are you sure you want to move forward?',
        text: 'You still have resources left to spend!',
        confirmButtonText: 'Go back and spend more resources.',
        confirmButtonColor: '#faa634',
        showCancelButton: true,
        cancelButtonText: "Let's move on.",
      }).then(value => {
        const { history } = this.props;
        if (value.dismiss === 'cancel') {
          history.push('/priorities');
        } else if (value.value === true) {
          history.push('/methods');
        }
      });
    }
  };

  render() {
    const { selectedCards, resources } = this.context;
    return (
      <Fragment>
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
          <FooterNext
            as={Link}
            to="/priorities"
            type="button"
            onClick={event => {
              event.preventDefault();
              this.nextAlerts(selectedCards, resources);
            }}
          />
        </Footer>
      </Fragment>
    );
  }
}

Methods.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

Methods.contextType = MyContext;

export default Methods;
