import styled from 'styled-components';

export const PrevBtn = styled.div`
  width: 5rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--line-color);
  transform: rotate(270deg) scaleY(2);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -17rem;
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(90deg) scaleY(2);
`;
