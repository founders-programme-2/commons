import React from 'react';
import arrowPath from '../../assets/arrow.svg';
import {
  ShortTerm,
  MediumTerm,
  LongTerm,
  TimelineTable,
  Arrow,
} from './index.style';
import TimelineCard from './TimelineCards';

const Timeline = props => {
  return (
    <div>
      <Arrow src={arrowPath} />
      <TimelineTable>
        <tbody>
          <ShortTerm>
            <td>
              {' '}
              <TimelineCard />
            </td>
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
