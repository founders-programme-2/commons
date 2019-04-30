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
`;

export const ListContainer = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  text-align: center;
`;

export const Logo = styled.img`
  width: 40%;
  height: auto;
  margin: 0 auto;
`;

export const LogoLink = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
`;

export const GroupSection = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TeamMember = styled.div`
  height: 35%
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const TeamPic = styled.img`
  width: 100%;
  border-radius: 8%;
`;
