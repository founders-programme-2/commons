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
import methodCardData from '../../fakeData/methodCardData';
import { MyContext } from '../../Context/ContextComponent';

const Timeline = () => {
  // Each section is its own div that the methods get rendered to
  // Most divs are ```display: flex``` so the whole timeline is responsive
  // renderElements() is called in each div
  return (
    <MyContext.Consumer>
      {context => {
        // get card ids and priority/time from context
        const { selectedCards, selectedPriority, selectedTime } = context;
        const idArray = selectedCards.map(ele => ele.id);
        // create array of selected card data
        const prioritizedCards = methodCardData.filter(card =>
          idArray.includes(card.id)
        );
        // add priority and time keys into selected card objects
        const finalCardInfo = prioritizedCards.map((ele, ind) => {
          const newObj = ele;
          newObj.priority = selectedPriority[ind].priority;
          newObj.time = selectedTime[ind].time;
          return newObj;
        });

        // render elements based on whether they match the supplied arguments
        const renderElements = (priorityArg, timeArg) => {
          return finalCardInfo.map(ele => {
            if (ele.priority === priorityArg && ele.time === timeArg) {
              return <TimelineCard name={ele.cardTitle} key={ele.id} />;
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
                {renderElements('low', 'short')}
              </CardContainerDiv>
              <CardContainerDiv>
                {renderElements('medium', 'short')}
              </CardContainerDiv>
              <CardContainerDiv>
                <SubtitlePriority>High priority</SubtitlePriority>
                {renderElements('high', 'short')}
              </CardContainerDiv>
            </ShortTermDiv>

            <MediumTermDiv>
              <SubtitleTime>Med-Term</SubtitleTime>
              <CardContainerDiv>
                {renderElements('low', 'mid')}
              </CardContainerDiv>
              <CardContainerDiv>
                {renderElements('medium', 'mid')}
              </CardContainerDiv>
              <CardContainerDiv>
                {renderElements('high', 'mid')}
              </CardContainerDiv>
            </MediumTermDiv>

            <LongTermDiv>
              <SubtitleTime>Long-Term</SubtitleTime>
              <CardContainerDiv>
                {renderElements('low', 'long')}
              </CardContainerDiv>
              <CardContainerDiv>
                {renderElements('medium', 'long')}
              </CardContainerDiv>
              <CardContainerDiv>
                {renderElements('high', 'long')}
              </CardContainerDiv>
            </LongTermDiv>
          </div>
        );
      }}
    </MyContext.Consumer>
  );
};

export default Timeline;
