import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  ShortTerm,
  test,
  MediumTerm,
  LongTerm,
  TimelineTable,
  Arrow,
} from './index.style';

const Timeline = props => {
  return (
    <div>
      <Arrow src={arrowPath} />
      <TimelineTable>
        <tbody>
          <ShortTerm>
            <td />
            <td />
            <td />
          </ShortTerm>
          <MediumTerm>
            <td />
            <td />
            <td />
          </MediumTerm>
          <LongTerm>
            <td />
            <td />
            <td />
          </LongTerm>
        </tbody>
      </TimelineTable>
    </div>
  );
};

export default Timeline;
