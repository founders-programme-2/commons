import styled from 'styled-components';

export const TimelineTable = styled.table`
  width: 100vw;
  border-collapse: collapse;
  margin: 3rem -2rem 5rem -2rem;
  text-align: center;
`;

export const ShortTerm = styled.tr`
  background-color: rgba(255, 199, 41, 0.25);
  height: 15rem;
`;

export const MediumTerm = styled.tr`
  background-color: rgba(255, 199, 41, 0.5);
  height: 15rem;
`;

export const LongTerm = styled.tr`
  background-color: rgba(255, 199, 41, 0.75);
  height: 15rem;
`;

export const Arrow = styled.img`
  height: 53rem;
  z-index: 1;
  position: absolute;
  margin-top: -3rem;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
`;
