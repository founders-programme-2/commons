import styled from 'styled-components';

export const SmallCard = styled.div`
  height: 5rem;
  width: 8rem;
  background-color: #e882a8;
  border-radius: 5px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
`;

export const CardText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;
