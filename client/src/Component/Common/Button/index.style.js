import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const PrimaryButton = styled.button`
  background: var(--button-background-color);
  height: ${props => props.height || '4.9rem'};
  width: ${props => props.width || '12.5rem'};
  border: none;
  font-size: 1.5rem;
  font-family: 'Poppins';
  font-weight: 700;
  border-radius: 0.5rem;
  color: black;
  font-weight: 800;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  padding: 1rem;

  :hover {
    cursor: pointer;
    background: var(--line-color);
  }
`;
