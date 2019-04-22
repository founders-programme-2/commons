import React from 'react';
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

const CardComponent = props => {
  const {
    cardImg,
    cardTitle,
    resourcePoints,
    updateStateResources,
    checked,
  } = props;

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

  const starsRender = stars(resourcePoints);

  return (
    <React.Fragment>
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
              updateStateResources(resourcePoints, event);
            }}
          />
        </label>
      </UseResource>
    </React.Fragment>
  );
};

CardComponent.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
  updateStateResources: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
};

export default CardComponent;
