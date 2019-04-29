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
  border: 0.3rem solid var(--line-color);
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0 1rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
`;

export const FooterPrevious = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--button-background-color);
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 4.9rem;
`;

export const FooterNext = styled(FooterPrevious)`
  transform: rotate(90deg);
`;

export const BackToScenario = styled.button`
  background: var(--button-background-color);
  height: 4.9rem;
  width: 12.5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 1rem;
  line-height: 1.3rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
  font-family: 'Poppins';
`;
