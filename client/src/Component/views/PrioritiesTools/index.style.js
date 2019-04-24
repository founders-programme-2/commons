import styled from 'styled-components';

export const PrevBtn = styled.div`
  width: 5rem;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: var(--line-color);
  transform: rotate(270deg);
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NextBtn = styled(PrevBtn)`
  transform: rotate(90deg);
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
