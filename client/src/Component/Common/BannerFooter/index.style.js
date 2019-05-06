import styled from 'styled-components';

export const BannerFooterWrapper = styled.div`
  height: 100%;
  margin-top: 8rem;
`;

export const ArrowIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--arrow-color);
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }

  :hover {
    cursor: pointer;
    color: var(--highlight-color);
  }
`;

export const TitleText = styled.p`
  height: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Poppins';
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
`;
