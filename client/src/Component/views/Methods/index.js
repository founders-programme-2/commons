import React, { Component, Fragment } from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import { UseResource, RemainingResources, Line } from './index.style';

class Methods extends Component {
  state = {
    resources: 15,
  };

  toggleCheckbox = (event, state) => {
    const { target } = event;
    const { resources } = state;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    //   if (value === true) {
    //     this.SetState({ resources: `${resources - resourcePoints}` });
    //   }
    //   return resources;
  };

  render() {
    const { resources } = this.state;

    return (
      <Fragment>
        <Header headerImg={null} titleText="Select your methods" />
        <MethodCard
          cardTitle="Example Card"
          resourcePoints={2}
          cardImg={null}
        />
        <UseResource>
          <label>
            Use this resource:
            <input
              type="checkbox"
              onChange={event => this.toggleCheckbox(event, resources)}
            />
          </label>
        </UseResource>
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
