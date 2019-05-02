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
  BackScenarioText,
} from './index.style';

class Methods extends Component {
  state = {
    data: methodCardData,
  };

  // Renders method cards dynamically
  renderMethodCards = () => {
    const { data } = this.state;
    const { checkedArray } = this.context;
    const newArray = data.map(methodCard => {
      const { id } = methodCard;
      methodCard.checked = false;
      const foundMethodCard = checkedArray.find(({ id: idFromContext }) => {
        return id === idFromContext;
      });
      if (foundMethodCard) {
        methodCard.checked = foundMethodCard.checked;
        return methodCard;
      }
      return methodCard;
    });
    return newArray.map(card => {
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
          noMoreResources={this.noMoreResources}
          id={card.id}
          tools={false}
          priority={false}
          checked={card.checked}
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

  displayScenario = () => {
    Swal.fire({
      type: 'info',
      html:
        '<h2 style="text-align:center;">>Your Scenario</h2>' +
        '<p style="text-align:justify;">The Slipham social action centre is launching a Connected Commons programme, aiming to help people explore its heritage, find local opportunities and services, and support new projects for a better Slipham in the future. It will do this by mapping people, projects and groups to find what they can offer, what they need, and how they are connected at present. The Commons won&apos;t be just one physical space. It will be on-the-ground trails and gathering points, maps of doing what, a website and other communication tools, with guides for action. We&apos;ll have small grants to support projects, and help on fundraising. The overall aim is to create an environment within which connections and collaborations can take place - the Slipham Connected Commons.</p>' +
        '<br><br>' +
        '<b>Your goal as a community connector is to select the tools that you would use to faciliate creating this Connected Commons Program. You have a limited amount of resources and must choose wisely.</b>, ',
      width: 900,
      padding: '3em',
      confirmButtonText: 'To Go To Your Scenario Page.',
      confirmButtonColor: '#faa634',
      showCancelButton: true,
      cancelButtonText: 'Back',
    }).then(result => {
      const { history } = this.props;
      if (result.value) {
        history.push('/yourScenario');
      }
    });
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
          <BackToScenario onClick={this.displayScenario}>
            <BackScenarioText>Review Scenario</BackScenarioText>
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
