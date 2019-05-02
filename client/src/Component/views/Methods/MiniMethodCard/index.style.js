import styled from 'styled-components';

export const CardWrapper = styled.section`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const XBtn = styled.button`
  float: right;
  padding: 0.5rem 1rem;
  font-weight: bold;
  font-size: 2rem;
  background: none;
  border: none;
  transition: all 0.2s ease-in-out;

  :hover {
    color: white;
    transform: scale(1.3);
  }
`;

export const CardTop = styled.div`
  border-radius: 5px 5px 0px 0px;
  background: var(--highlight-color);
  width: 12rem;
  height: 8rem;
`;

export const CardInfo = styled.div`
  min-width: 10rem;
  width: 12rem;
  min-height: 8rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  padding: 0.5rem;
`;
