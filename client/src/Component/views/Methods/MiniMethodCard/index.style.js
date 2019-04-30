import styled from 'styled-components';

export const CardWrapper = styled.section`
  border-radius: 5px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  margin: 2rem noAuto;
`;

export const XBtn = styled.button`
  float: right;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 2rem;
`;

export const CardTop = styled.div`
  border-radius: 5px 5px 0px 0px;
  background: var(--highlight-color);
  width: 14rem;
  height: 10rem;
`;

export const CardInfo = styled.div`
  width: 14rem;
  min-height: 10rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 0.5rem;
`;
