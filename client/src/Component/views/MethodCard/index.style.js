import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const CardWrapper = styled.section`
  background: var(--background-color);
  border-radius: 5px 5px 5px 5px;
  height: 27rem;
  width: 22rem;
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
`;

export const Img = styled.img`
  border-radius: 5px 5px 0px 0px;
  width: 22rem;
  height: 13.5rem;
`;

export const DefaultImg = styled.div`
  border-radius: 5px 5px 0px 0px;
  background: var(--highlight-color);
  width: 22rem;
  height: 13.5rem;
`;

export const Info = styled.section`
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 5px 5px;
  width: 22rem;
  height: 13.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-family: Poppins;
`

export const MoreInfo = styled(Link)`
  font-family: Open Sans;
`

export const ResourcePoints = styled.div`
  margin: 1rem auto;
  display: block;
`

export const ResourceStars = styled.img`
  height: 14px;
  width: 14px;
`