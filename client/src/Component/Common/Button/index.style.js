import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PrimaryButton = styled.button`
  background: var(--button-background-color);
  height: 4.9rem;
  width: 12.5rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 1rem;
  border-radius: 0.5rem;
  color: black;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;

  :hover {
    cursor: pointer;
    background: var(--line-color);
  }
`;
