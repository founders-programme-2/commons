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

export const ShortTermDiv = styled.div`
  background-color: rgba(255, 199, 41, 0.25);
  min-height: 15rem;
  width: 100vw;
  margin: 0 -2rem;
  display: flex;
  flex-direction: row;
`;

export const MediumTermDiv = styled(ShortTermDiv)`
  background-color: rgba(255, 199, 41, 0.5);
`;

export const LongTermDiv = styled(ShortTermDiv)`
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
