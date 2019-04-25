import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  Arrow,
  ShortTermDiv,
  MediumTermDiv,
  LongTermDiv,
  CardContainerDiv,
  SubtitleTimeline,
  SubtitlePriority,
  SubtitleTime,
} from './index.style';
import TimelineCard from './TimelineCards';

const exampleData = [
  // These are just for testing so that you can see the cards appear on the page.
  // I thought that it would be best to leave them until we can implement the actual cards
  // so that everyone can understand how they are implemented and what they are looking for
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

// Render function: Takes in the priority and time as arguments, and only renders the matching methods
// Will take selected methods as props once they are passed through the state
const Timeline = props => {
  const renderElements = (priorityArg, timeArg) => {
    return exampleData.map((ele, index) => {
      if (ele.priority === priorityArg && ele.time === timeArg) {
        return <TimelineCard name={ele.cardTitle} key={index} />;
      }
      return null;
    });
  };

  // Maybe not the most elegant but it works for now! Each section is its own div that the methods get rendered too
  // Most divs are display: flex so the whole timeline is responsive
  // renderElements() is called in each div
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
