import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
`;

export const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 0.2rem;
  text-align: center;
`;

export const GroupSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GroupMember = styled.div`
  /* min-height helps to avoid problems with smaller logos */
  min-height: 35%
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const GroupPic = styled.img`
  width: 100%;
  border-radius: 8%;
`;

export const FlaticonLogo = styled(GroupPic)`
  border-radius: 0;
  padding: 1rem;
  background-color: #585757;
  margin-bottom: 2rem;
`;

export const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans';
  margin-bottom: 2rem;
`;
