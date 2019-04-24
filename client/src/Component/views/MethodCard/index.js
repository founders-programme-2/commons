import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Img,
  Info,
  DefaultImg,
  ResourcePoints,
  ResourceStars,
  CardTitle,
  StarWrapper,
  UseResource,
  InfoText,
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
      description,
      requiredCards,
      use,
      category,
      difficulty,
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
          {cardImg === null ? (
            <Img src={cardImg} alt="card logo" />
          ) : (
            <DefaultImg alt="default card image" />
          )}
          <Info>
            <CardTitle>{cardTitle}</CardTitle>
            <br />
            <InfoText>{description}</InfoText>
            <br />
            <br />
            Requires: <InfoText>{requiredCards}</InfoText>
            <br />
            Difficulty: <InfoText>{difficulty}</InfoText>
            <br />
            Used by: <InfoText>{use}</InfoText>
            <br />
            Category: <InfoText>{category}</InfoText>
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
  cardImg: PropTypes.func,
  cardTitle: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
  chooseMethod: PropTypes.func.isRequired,
  removeMethod: PropTypes.func.isRequired,
  errorOverSpend: PropTypes.func.isRequired,
  key: PropTypes.number,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string,
  requiredCards: PropTypes.string,
  use: PropTypes.string,
  category: PropTypes.string.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
  key: PropTypes.bool,
  difficulty: PropTypes.bool,
  requiredCards: PropTypes.bool,
  use: PropTypes.bool,
};

export default CardComponent;
