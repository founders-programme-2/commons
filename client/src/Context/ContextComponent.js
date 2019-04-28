import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
    selectedPriority: [],
  };

  // add selected card ID to state
  addSelectedCard = id => {
    this.setState(state => {
      return state.selectedCards.push({ id });
    });
  };

  // remove ID from state when uncheck Card
  removeSelectedCard = id => {
    this.setState(state => {
      const selectedCards = state.selectedCards.filter(card => id !== card.id);
      return { selectedCards };
    });
  };

  selectedPriorityStore = (priority, id) => {
    this.setState(state => {
      if (state.selectedPriority.length === 0) {
        return state.selectedPriority.push({ id, priority });
      }
      return state.selectedPriority.map((ele, index) => {
        if (ele.id === id) {
          state.selectedPriority.splice(index);
        }
        return state.selectedPriority.push({ id, priority });
      });
    });
  };

  render() {
    const { children } = this.props;
    const { selectedCards, selectedPriority } = this.state;
    return (
      <MyContext.Provider
        value={{
          selectedCards,
          selectedPriority,
          state: this.state,
          addSelectedCard: this.addSelectedCard,
          removeSelectedCard: this.removeSelectedCard,
          selectedPriorityStore: this.selectedPriorityStore,
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
