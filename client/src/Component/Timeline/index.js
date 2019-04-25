import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  Arrow,
  ShortTermDiv,
  MediumTermDiv,
  LongTermDiv,
  CardContainerDiv,
  CardContainer,
  SubtitleTimeline,
  SubtitlePriority,
  SubtitleTime,
} from './index.style';
import TimelineCard from './TimelineCards';

const exampleData = [
  {
    cardTitle: 'Email Group',
    priority: 1,
    time: 1,
  },
  {
    cardTitle: 'Network Map',
    priority: 2,
    time: 2,
  },
  {
    cardTitle: 'Example',
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
      <SubtitleTimeline>Timeline</SubtitleTimeline>
      <Arrow src={arrowPath} />
      <ShortTermDiv>
        <SubtitleTime>Short-Term</SubtitleTime>
        <CardContainerDiv>
          <SubtitlePriority>Low priority</SubtitlePriority>
          {renderElements(1, 1)}
        </CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 1)}</CardContainerDiv>
        <CardContainerDiv>
          <SubtitlePriority>High priority</SubtitlePriority>
          {renderElements(3, 1)}
        </CardContainerDiv>
      </ShortTermDiv>
      <MediumTermDiv>
        <SubtitleTime>Med-Term</SubtitleTime>
        <CardContainerDiv>{renderElements(1, 2)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 2)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(3, 2)}</CardContainerDiv>
      </MediumTermDiv>
      <LongTermDiv>
        <SubtitleTime>Long-Term</SubtitleTime>
        <CardContainerDiv>{renderElements(1, 3)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(2, 3)}</CardContainerDiv>
        <CardContainerDiv>{renderElements(3, 3)}</CardContainerDiv>
      </LongTermDiv>
    </div>
  );
};

export default Timeline;
