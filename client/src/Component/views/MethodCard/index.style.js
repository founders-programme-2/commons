import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardWrapper = styled.section`
  background: var(--background-color);
  border-radius: 5px 5px 5px 5px;
  height: 27rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  border-radius: 5px 5px 0px 0px;
  background: var(--highlight-color);
  width: 22rem;
  height: 13.5rem;
`;

export const Info = styled.section`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  width: 22rem;
  height: 13.5rem;
`;

export const MoreInfo = styled(Link)`
  font-family: Poppins;
`