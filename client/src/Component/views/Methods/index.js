import React, { Component, Fragment } from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactRouterPropTypes from 'react-router-prop-types';
import Header from '../../Common/Header';
import MethodCard from '../MethodCard';
import MiniCard from './MiniMethodCard';
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
  SelectedMethods,
} from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
    currentCardTitle: '',
  };

  // Renders method cards dynamically
  renderMethodCards = () => {
    const { resources } = this.state;
    return methodCardData.map(card => {
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
          noMoreResources={this.noMoreResources}
          resources={resources}
          id={card.id}
          tools={false}
          priority={false}
        />
      );
    });
  };

  // renders Mini Method Cards dynamically
  renderMiniMethodCards = event => {
    const { selectedCards } = this.context;
    const idArray = selectedCards.map(ele => ele.id);
    const filteredCards = methodCardData.filter(card =>
      idArray.includes(card.id)
    );
    return filteredCards.map(card => {
      return <MiniCard title={card.cardTitle} key={card.id} />;
    });
  };

  // Returns resources when checkbox is unchecked
  chooseMethod = (points, event) => {
    let { resources } = this.state;
    this.setState(state => {
      resources = state.resources - points;
      return { resources };
    });
  };

  // Removes resource points from total 'resources' if checkbox is checked
  removeMethod = (points, event) => {
    let { resources } = this.state;
    this.setState(nextState => {
      resources = nextState.resources + points;
      return { resources };
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
    const { resources } = this.state;
    const { selectedCards } = this.context;
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

        {selectedCards.length > 0 ? (
          <SelectedMethods>
            Your selected methods:
            {this.renderMiniMethodCards()}
          </SelectedMethods>
        ) : (
          <SelectedMethods>You haven't selected any methods!</SelectedMethods>
        )}

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
