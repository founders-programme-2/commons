import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
  };

  // add selected card ID to state
  addSelectedCard = id => {
    this.setState(state => {
      state.selectedCards.push({ id });
    });
  };

  // remove ID from state when uncheck Card
  removeSelectedCard = id => {
    this.setState(state => {
      const selectedCards = state.selectedCards.filter(card => id !== card.id);
      return { selectedCards };
    });
  };

  render() {
    const { children } = this.props;
    const { selectedCards } = this.state;
    return (
      <MyContext.Provider
        value={{
          selectedCards,
          state: this.state,
          addSelectedCard: this.addSelectedCard,
          removeSelectedCard: this.removeSelectedCard,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
