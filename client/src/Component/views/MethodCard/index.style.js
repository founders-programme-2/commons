import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.section`
  background: var(--background-color);
  border-radius: 5px 5px 5px 5px;
  width: 22rem;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  padding: 2rem 0;
  outline: none;
`;

export const InfoText = styled.p`
  display: inline;
`;

export const Img = styled.img`
  border-radius: 5px 5px 0px 0px;
  width: 22rem;
  height: ${props => props.heightImg || ' 13.5rem'};
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
  height: auto;
`;

export const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-family: Poppins;
  margin: 0 0 -2rem 0;
  text-align: ${props => props.textAlign || 'left'};
`;

export const MoreInfo = styled(Link)`
  font-family: Open Sans;
`;

export const ResourcePoints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const ResourceStars = styled.img`
  height: 1.4rem;
  width: 1.4rem;
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const UseResource = styled.form`
  font-size: 2rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Line = styled.div`
  display: block;
  border: 0.3rem solid #faa634;
  border-radius: 1rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  padding: 0.5rem;
`;

export const FormWrap = styled.form`
  font-size: 2rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const RadioWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const TimelineWrap = styled.div`
  margin-top: 1rem;
`;

export const Label = styled.label`
  font-family: 'Open Sans';
  font-size: 2rem;
`;

export const Span = styled.span`
  display: block;
`;

export const LightSpan = styled.span`
  font-size: 1.7rem;
  font-weight: 400;
`;
