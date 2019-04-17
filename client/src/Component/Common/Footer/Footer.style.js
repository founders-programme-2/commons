import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  margin-top: 40.5rem;
  justify-content: space-between;
  padding: 2.5rem;
`;

export const NextButton = styled.button`
  height: 4rem;
  width: 6.3rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffc729;
  transform: rotate(270deg);
  font-size: 1rem;
  left: 14.6rem;
  top: 71.5rem;
  border: none;
  border-radius: 0.5rem;
`;

export const PreviousButton = styled.button`
  height: 3.9rem;
  width: 6.3rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffc729;
  transform: rotate(90deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

export const BackToSecnario = styled.button`
  background: #ffc729;
  height: 4rem;
  width: 12.5rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 1rem;
  border-radius: 0.5rem;
  color: #5b5b68;
  box-shadow: 0.2rem 0.2rem #5b5b68;
`;
