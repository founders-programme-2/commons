import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  ShortTerm,
  MediumTerm,
  LongTerm,
  TimelineTable,
  Arrow,
  CardContainer
} from './index.style';
import TimelineCard from './TimelineCards';

const exampleData = [
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
      <TimelineTable>
        <tbody>
          <ShortTerm>
            <CardContainer>{renderElements(1, 1)}</CardContainer>
            <CardContainer>{renderElements(2, 1)}</CardContainer>
            <CardContainer>{renderElements(3, 1)}</CardContainer>
          </ShortTerm>
          <MediumTerm>
            <CardContainer>{renderElements(1, 2)}</CardContainer>
            <CardContainer>{renderElements(2, 2)}</CardContainer>
            <CardContainer>{renderElements(3, 2)}</CardContainer>
          </MediumTerm>
          <LongTerm>
            <CardContainer>{renderElements(1, 3)}</CardContainer>
            <CardContainer>{renderElements(2, 3)}</CardContainer>
            <CardContainer>{renderElements(3, 3)}</CardContainer>
          </LongTerm>
        </tbody>
      </TimelineTable>
    </div>
  );
};

export default Timeline;
