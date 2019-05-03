import styled from 'styled-components';

export const ListEle = styled.li`
  list-style: none;
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 2rem;

  p {
    font-family: 'Poppins';
    font-weight: 700;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

export const Line = styled.div`
  display: block;
  border: 0.3rem solid #faa634;
  border-radius: 1rem;
  margin-bottom: 3rem;
`;
