import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  margin-top: 40.5rem;
  justify-content: space-between;
  padding: 0.9rem;
`;

export const FooterComponent = styled.div`
  height: 70%;
  margin-top: 440px;
`;

export const NextButton = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffc729;
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const PreviousButton = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #ffc729;
  transform: rotate(90deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BackToSecnario = styled.button`
  background: #ffc729;
  height: 4.9rem;
  width: 12.5rem;
  border: none;
  font-size: 1.1rem;
  font-weight: 1rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Line = styled.div`
  margin-bottom: -40rem;
  border: 0.2rem solid #ffc729;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
