import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  margin-top: 60.5rem;
  justify-content: space-between;
  padding: 40px;
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
`;

export const PreviousButton = styled.button`
  height: 4rem;
  width: 6.3rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffc729;
  transform: rotate(90deg);
  font-size: 1rem;
  border: none;
`;

export const BackToSecnario = styled.button`
  background: #ffc729;
  height: 5rem;
  width: 12.5rem;
  border: none;
`;
