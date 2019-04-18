import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  margin-top: 40.5rem;
  justify-content: space-between;
  padding: 2.5rem;
`;

export const FooterComponent = styled.div`
  margin-top: 40.5rem;
  position: fixed;
`;
export const NextButton = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #faa634;
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

export const PreviousButton = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #faa634;
  transform: rotate(90deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
`;

export const BackToSecnario = styled.button`
  background: #faa634;
  height: 4.3rem;
  width: 12.5rem;
  border: none;
  font-size: 1.2rem;
  font-weight: 1rem;
  border-radius: 0.5rem;
  color: black;
  box-shadow: 0.1rem 0.2rem #5b5b68;
`;

export const Line = styled.div`
  margin-bottom: -40rem;
  border: 0.2rem solid #faa634;
  border-radius: 1rem;
`;
