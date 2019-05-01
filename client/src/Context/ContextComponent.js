import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    selectedCards: [],
    selectedPriority: [],
    selectedTime: [],
    resources: 15,
    checkedArray: [],
  };

  // to toggle checked
  updatedCheckedCards = (id, state) => {
    const { checkedArray } = this.state;
    let newCheckedArray = [...checkedArray];
    const found = newCheckedArray.find(({ id: foundId }) => id === foundId);
    if (found) {
      newCheckedArray = newCheckedArray.map(obj => {
        if (obj.id === id) {
          return {
            id: obj.id,
            checked: !state,
          };
        }
        return obj;
      });
    } else {
      newCheckedArray.push({
        id,
        checked: !state,
      });
    }
    this.setState({
      checkedArray: newCheckedArray,
    });
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

  selectedTimeStore = (time, id) => {
    this.setState(state => {
      if (state.selectedTime.length === 0) {
        return state.selectedTime.push({ id, time });
      }
      return state.selectedTime.map((ele, index) => {
        if (ele.id === id) {
          state.selectedTime.splice(index);
        }
        return state.selectedTime.push({ id, time });
      });
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

  render() {
    const { children } = this.props;
    const {
      selectedCards,
      selectedPriority,
      selectedTime,
      resources,
      checkedArray,
    } = this.state;
    // console.log('resources:', resources);
    // console.log('checkedArray:', checkedArray)
    // console.log('selectedTime:', selectedTime);
    // console.log('selectedPriority:', selectedPriority);
    // console.log('selectedCards:', selectedCards);
    return (
      <MyContext.Provider
        value={{
          selectedCards,
          selectedPriority,
          selectedTime,
          state: this.state,
          addSelectedCard: this.addSelectedCard,
          removeSelectedCard: this.removeSelectedCard,
          selectedPriorityStore: this.selectedPriorityStore,
          selectedTimeStore: this.selectedTimeStore,
          resources,
          chooseMethod: this.chooseMethod,
          removeMethod: this.removeMethod,
          checkedArray,
          updatedCheckedCards: this.updatedCheckedCards,
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
