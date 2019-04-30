import { styled } from 'styled-components';
import { noAuto } from '@fortawesome/fontawesome-svg-core';

export const cardWrapper = styled.section`
  border-radius: 5px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  margin: 2rem noAuto;
`;

export const cardTop = styled.div`
  border-radius: 5px 5px 0px 0px;
  background: var(--highlight-color);
  width: 7rem;
  height: 5rem;
`;

export const cardInfo = styled.div`
  width: 7rem;
  height: 5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
`;
