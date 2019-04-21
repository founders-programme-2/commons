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
  StarWrapper
} from './index.style';
import star from '../../../assets/star.svg';

const CardComponent = props => {
  const { cardImg, cardTitle, resourcePoints } = props;

  const stars = resourcePoints => {
    const starsCount = [];
    let counter = 0;
    while (resourcePoints > counter) {
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
    </React.Fragment>
  );
};

CardComponent.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
};

export default CardComponent;
