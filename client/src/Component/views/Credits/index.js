import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import {
  Wrapper,
  Subtitle,
  ListContainer,
  LogoLink,
  Logo,
  ListItem,
  TeamDiv,
  TeamMember,
  TeamPic,
} from './index.style';
import intersticiaLogo from '../../../assets/intersticia-logo-sml.png';

const Credits = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Credits" />

      <Wrapper>
        <Subtitle>Supported by</Subtitle>
        <div>
          <LogoLink href="https://intersticia.org/" target="blank">
            <Logo src={intersticiaLogo} />
          </LogoLink>
        </div>
        <Subtitle>Developed by</Subtitle>
        <TeamDiv>
          <TeamMember>
            <TeamPic src="https://i.ibb.co/PjrPjbQ/Screen-Shot-2019-04-30-at-4-25-40-PM.png" />
            <LogoLink href="https://github.com/hshahwan" target="blank">
              Haneen
            </LogoLink>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars0.githubusercontent.com/u/36124895?s=460&v=4" />
            <LogoLink href="https://github.com/ali-7" target="blank">
              Ali
            </LogoLink>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars1.githubusercontent.com/u/37771591?s=460&v=4" />
            <LogoLink href="https://github.com/teenie-quaggard" target="blank">
              Kristina
            </LogoLink>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars3.githubusercontent.com/u/9094166?s=460&v=4?v=3&s=200" />
            <LogoLink href="https://github.com/oliversw" target="blank">
              Oliver
            </LogoLink>
          </TeamMember>
        </TeamDiv>
        <Subtitle>In conjunction with</Subtitle>
        <ListContainer>
          <ListItem>
            <LogoLink href="https://networkedcity.london/start" target="blank">
              Networked City
            </LogoLink>
          </ListItem>
          <ListItem>
            <LogoLink href="https://www.foundersandcoders.com/" target="blank">
              Founders and Coders
            </LogoLink>
          </ListItem>
          <ListItem>
            <LogoLink href="https://gazaskygeeks.com/" target="blank">
              Gaza Sky Geeks
            </LogoLink>
          </ListItem>
        </ListContainer>
        <Subtitle>Resources</Subtitle>
        <ListContainer>
          <ListItem>
            <LogoLink href="https://www.flaticon.com/" target="blank">
              Flaticon
            </LogoLink>
          </ListItem>
        </ListContainer>
      </Wrapper>

      <Footer backLink="/summary" nextLink="{null}" reviewScenario={null} />
    </div>
  );
};

export default Credits;
