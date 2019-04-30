import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import {
  Wrapper,
  ListContainer,
  Logo,
  ListItem,
  LogoLink,
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
        <h2>Supported by</h2>
        <div>
          <LogoLink href="https://intersticia.org/" target="blank">
            <Logo src={intersticiaLogo} />
          </LogoLink>
        </div>
        <h2>Developed by</h2>
        <TeamDiv>
          <TeamMember>
            <TeamPic src="https://avatars0.githubusercontent.com/u/32449667?s=460&v=4" />
            <a href="https://github.com/hshahwan" target="blank">
              Haneen
            </a>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars0.githubusercontent.com/u/36124895?s=460&v=4" />
            <a href="https://github.com/ali-7" target="blank">
              Ali
            </a>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars1.githubusercontent.com/u/37771591?s=460&v=4" />
            <a href="https://github.com/teenie-quaggard" target="blank">
              Kristina
            </a>
          </TeamMember>

          <TeamMember>
            <TeamPic src="https://avatars3.githubusercontent.com/u/9094166?s=460&v=4?v=3&s=200" />
            <a href="https://github.com/oliversw" target="blank">
              Oliver
            </a>
          </TeamMember>
        </TeamDiv>
        <h2>In conjunction with</h2>
        <ListContainer>
          <ListItem>
            <a href="https://networkedcity.london/start" target="blank">
              Networked City
            </a>
          </ListItem>
          <ListItem>
            <a href="https://www.foundersandcoders.com/" target="blank">
              Founders and Coders
            </a>
          </ListItem>
          <ListItem>
            <a href="https://gazaskygeeks.com/" target="blank">
              Gaza Sky Geeks
            </a>
          </ListItem>
        </ListContainer>
        <h2>Resources</h2>
        <ListContainer>
          <ListItem>
            <a href="https://www.flaticon.com/" target="blank">
              Flaticon
            </a>
          </ListItem>
        </ListContainer>
      </Wrapper>

      <Footer backLink="/summary" nextLink="{null}" reviewScenario={null} />
    </div>
  );
};

export default Credits;
