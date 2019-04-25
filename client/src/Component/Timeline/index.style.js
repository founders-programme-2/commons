import styled from 'styled-components';

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

export const TermDiv = styled.div`
  background-color: rgba(255, 199, 41, 0.25);
  min-height: 15rem;
  width: 100vw;
  margin: 0 -2rem;
  display: flex;
  flex-direction: row;
`;

export const ShortTermDiv = styled(TermDiv)`
  padding-top: 2rem;
`;

export const MediumTermDiv = styled(TermDiv)`
  background-color: rgba(255, 199, 41, 0.5);
`;

export const LongTermDiv = styled(TermDiv)`
  background-color: rgba(255, 199, 41, 0.75);
`;

export const CardContainerDiv = styled.div`
  flex-grow: 1;
  max-width: 33.33vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Subtitle = styled.h3`
  font-family: Poppins;
  font-weight: 800;
  font-size: 1.5rem;
  text-align: center;
`;

export const SubtitleTimeline = styled(Subtitle)`
  margin: 0 0 3.5rem 0;
`;

export const SubtitlePriority = styled(Subtitle)`
  margin-top: -2rem;
  width: 100%;
  align-self: flex-start;
`;

export const SubtitleTime = styled(Subtitle)`
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
  white-space: nowrap;
  display: block;
  height: 2rem;
  width: 7rem;
  margin-left: -2rem;
  align-self: center;
`;
