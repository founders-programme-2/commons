import React from 'react';
import PropTypes from 'prop-types';
import { SmallCard, CardText } from './index.style';

const TimelineCards = props => {
  const { name } = props;
  return (
    <SmallCard>
      <CardText>{name}</CardText>
    </SmallCard>
  );
};

TimelineCards.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TimelineCards;
