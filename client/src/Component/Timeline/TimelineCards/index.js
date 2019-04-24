import React from 'react';
import { SmallCard, CardText } from './index.style';

const TimelineCards = props => {
  const { name } = props;
  return (
    <SmallCard>
      <CardText>{name}</CardText>
    </SmallCard>
  );
};

export default TimelineCards;
