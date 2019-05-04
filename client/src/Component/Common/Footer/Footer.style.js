import styled from 'styled-components';

export const Buttons = styled.footer`
  display: flex;
  margin-top: 40.5rem;
  justify-content: space-between;
  padding: 0.9rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));

  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

export const PreviousButton = styled.button`
  width: 5.2rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: #faa634;
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  height: 4.9rem;

  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

export const NextButton = styled(PreviousButton)`
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

  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

export const Line = styled.div`
  margin-bottom: -40rem;
  border: 0.3rem solid #faa634;
  border-radius: 1rem;
`;
