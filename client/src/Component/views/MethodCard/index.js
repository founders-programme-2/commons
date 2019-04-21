import { React, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Img, Info, MoreInfo } from './index.style';

const CardComponent = props => {
  const { cardImg, cardTitle, resourcePoints } = props;

  return (
    <Fragment>
      <CardWrapper>
        <Img>{cardImg}</Img>
        <Info>
          {cardTitle}
          <MoreInfo>Flip for more info...</MoreInfo>
          {resourcePoints}
        </Info>
      </CardWrapper>
    </Fragment>
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
