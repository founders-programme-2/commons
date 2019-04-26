import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
  };

  render() {
    const { children } = this.props;
    const { selectedCards } = this.state;
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          selectFunc: card =>
            this.setState({
              selectedCards: () => selectedCards.concat(card),
            }),
        }}
      >
        {children}
      </MyContext.Provider>
    );
  }
}

// {
//     selectFunc: card =>
//       this.setState({
//         selectedCards: this.state.selectedCards.concat(card),
//       }),
//   }
