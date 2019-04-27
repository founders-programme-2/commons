import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
  };

  addSelectedCard = id => {
    console.log(`id =>> ${id}`);
    this.setState(state => {
      state.selectedCards.push({ id });
      console.log(state.selectedCards);
    });
  };

  removeSelectedCard = id => {
    const selectedCards = this.state.selectedCards.filter(
      card => id !== card.id
    );
    this.setState({ selectedCards });
    console.log('selectedCardsremoved:', selectedCards);
  };

  render() {
    const { children } = this.props;
    const { selectedCards } = this.state;
    return (
      <MyContext.Provider
        value={{
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
