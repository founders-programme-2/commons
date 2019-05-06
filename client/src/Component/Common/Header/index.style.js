import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
`;

export const Logo = styled.img`
  width: 7rem;
  height: 7rem;
  display: block;
  margin: 2rem;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const Line = styled.div`
  display: block;
  border: 0.3rem solid #faa634;
  border-radius: 1rem;
`;

export const HeaderTitle = styled.div`
  display: flex;
  margin: 1.5rem;
  align-items: center;
`;

export const HeaderImg = styled.img`
  width: 6rem;
  height: auto;
  margin-right: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #000000;
`;
