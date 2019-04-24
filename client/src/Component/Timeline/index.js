import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  Arrow,
  ShortTermDiv,
  MediumTermDiv,
  LongTermDiv,
  CardContainerDiv,
} from './index.style';
import TimelineCard from './TimelineCards';

const exampleData = [
  {
    cardTitle: '1p1t',
    priority: 1,
    time: 1,
  },
  {
    cardTitle: '1p1t',
    priority: 1,
    time: 1,
  },
  {
    cardTitle: '1p1t',
    priority: 1,
    time: 1,
  },
  {
    cardTitle: '2p2t',
    priority: 2,
    time: 2,
  },
  {
    cardTitle: '3p1t',
    priority: 3,
    time: 1,
  },
];

const Timeline = props => {
  const renderElements = (priorityArg, timeArg) => {
    return exampleData.map((ele, index) => {
      if (ele.priority === priorityArg && ele.time === timeArg) {
        return <TimelineCard name={ele.cardTitle} key={index} />;
      }
      return null;
    });
  };
  return (
    <div>
      <Arrow src={arrowPath} />
      <ShortTermDiv>
        <CardContainerDiv>{renderElements(1, 1)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 1)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(3, 1)}</CardContainerDiv>
      </ShortTermDiv>
      <MediumTermDiv>
        <CardContainerDiv>{renderElements(1, 2)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 2)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(3, 2)}</CardContainerDiv>
      </MediumTermDiv>
      <LongTermDiv>
        <CardContainerDiv>{renderElements(1, 3)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 3)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(3, 3)}</CardContainerDiv>
      </LongTermDiv>
    </div>
  );
};

export default Timeline;
