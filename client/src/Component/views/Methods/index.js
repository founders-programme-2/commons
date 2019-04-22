import React, { Component, Fragment } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { RemainingResources, Line } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
    checked: false,
  };

  toggleCheckbox = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
    console.log(checked)
  };

  // useResource = (event, points) => {
  //   const { target } = event;
  //   if (target.checked) {
  //     this.setState(prevState => {
  //       const resources = prevState.resources - points;
  //       console.log(resources);
  //       return { resources };
  //     });
  //     return prevState => prevState.resources;
  //   }
  // };

  // updateStateResources = (event, points) => {
  //   console.log(event.target);
  //   this.setState(prevState => {
  //     const resources = prevState.resources - points;
  //     console.log(resources);
  //     return { resources };
  //   });
  // };

  render() {
    const { resources } = this.state;

    return (
      <Fragment>
        <Header headerImg={null} titleText="Select your methods" />
        <MethodCard
          cardTitle="Example Card"
          resourcePoints={2}
          cardImg={null}
          toggleCheckbox={this.toggleCheckbox}
        />
        <Line />
        <RemainingResources>
          Remaining resources: {resources};
        </RemainingResources>
        <Footer />
      </Fragment>
    );
  }
}

export default Methods;
