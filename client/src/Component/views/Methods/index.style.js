import styled from 'styled-components';

export const RemainingResources = styled.div`
  margin: 2rem;
  font-size: 2rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Line = styled.div`
  display: block;
  border: 0.3rem solid #faa634;
  border-radius: 1rem;
`;

export const PrevBtn = styled.div`
  width: 5rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--line-color);
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(90deg);
`;