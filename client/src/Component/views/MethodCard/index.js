import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Img,
  Info,
  MoreInfo,
  DefaultImg,
  ResourcePoints,
  ResourceStars,
  CardTitle,
  StarWrapper,
  UseResource,
} from './index.style';
import star from '../../../assets/star.svg';

class CardComponent extends Component {
  state = {
    checked: false,
  };

  // toggles checkbox on click
  toggleCheckbox = event => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const {
      cardImg,
      cardTitle,
      resourcePoints,
      chooseMethod,
      removeMethod,
      errorOverSpend,
    } = this.props;

    const { checked } = this.state;

    // looks at number of resource points and pushes as many stars to card
    const stars = points => {
      const starsCount = [];
      let counter = 0;
      while (points > counter) {
        // eslint-disable-next-line no-plusplus
        counter++;
        starsCount.push(
          <ResourceStars src={star} key={`resourceStars-${counter}`} />
        );
      }
      return starsCount;
    };
    // saves func output to variable for render
    const starsRender = stars(resourcePoints);
    return (
      <Fragment>
        <CardWrapper>
          {cardImg ? (
            <Img src={cardImg} alt="card logo" />
          ) : (
            <DefaultImg alt="default card image" />
          )}

          <Info>
            <CardTitle>{cardTitle}</CardTitle>
            <br />
            <MoreInfo to="./about"> Click for more info...</MoreInfo>
            <ResourcePoints>
              {resourcePoints} resource points
              <br />
            </ResourcePoints>
            <StarWrapper>{starsRender}</StarWrapper>
          </Info>
        </CardWrapper>

        <UseResource>
          <label htmlFor="method-checkbox">
            Use this resource:
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input
              id="method-checkbox"
              type="checkbox"
              checked={checked}
              onChange={event => {
                this.toggleCheckbox(event);
                if (checked === false) {
                  removeMethod(resourcePoints, event);
                  errorOverSpend();
                } else if (checked === true) {
                  chooseMethod(resourcePoints, event);
                  errorOverSpend();
                }
              }}
            />
          </label>
        </UseResource>
      </Fragment>
    );
  }
}

CardComponent.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
  chooseMethod: PropTypes.func.isRequired,
  removeMethod: PropTypes.func.isRequired,
  errorOverSpend: PropTypes.func.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
};

export default CardComponent;
