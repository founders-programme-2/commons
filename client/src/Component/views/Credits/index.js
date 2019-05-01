import React from 'react';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import {
  Wrapper,
  Subtitle,
  LogoLink,
  GroupSection,
  GroupMember,
  GroupPic,
  FlaticonLogo,
} from './index.style';
import intersticiaLogo from '../../../assets/intersticia-logo-sml.png';
import facLogo from '../../../assets/fac-logo.png';
import gsgLogo from '../../../assets/gsg-logo.png';
import nwcLogo from '../../../assets/nwcLogo.png';

const Credits = () => {
  return (
    <div>
      <Header headerImg={null} titleText="Credits" />

      <Wrapper>
        <Subtitle>Supported by</Subtitle>

        <div>
          <LogoLink href="https://intersticia.org/" target="blank">
            <GroupPic src={intersticiaLogo} />
          </LogoLink>
        </div>

        <Subtitle>Developed by</Subtitle>

        <GroupSection>
          <GroupMember>
            <GroupPic src="https://i.ibb.co/PjrPjbQ/Screen-Shot-2019-04-30-at-4-25-40-PM.png" />
            <LogoLink href="https://github.com/hshahwan" target="blank">
              Haneen
            </LogoLink>
          </GroupMember>

          <GroupMember>
            <GroupPic src="https://avatars0.githubusercontent.com/u/36124895?s=460&v=4" />
            <LogoLink href="https://github.com/ali-7" target="blank">
              Ali
            </LogoLink>
          </GroupMember>

          <GroupMember>
            <GroupPic src="https://avatars1.githubusercontent.com/u/37771591?s=460&v=4" />
            <LogoLink href="https://github.com/teenie-quaggard" target="blank">
              Kristina
            </LogoLink>
          </GroupMember>

          <GroupMember>
            <GroupPic src="https://avatars3.githubusercontent.com/u/9094166?s=460&v=4?v=3&s=200" />
            <LogoLink href="https://github.com/oliversw" target="blank">
              Oliver
            </LogoLink>
          </GroupMember>
        </GroupSection>

        <Subtitle>In collaboration with</Subtitle>

        <GroupSection>
          <GroupMember>
            <LogoLink href="https://networkedcity.london/start" target="blank">
              <GroupPic src={nwcLogo} />
              Networked City
            </LogoLink>
          </GroupMember>
        </GroupSection>

        <GroupSection>
          <GroupMember>
            <LogoLink href="https://www.foundersandcoders.com/" target="blank">
              <GroupPic src={facLogo} />
              Founders and Coders
            </LogoLink>
          </GroupMember>

          <GroupMember>
            <LogoLink href="https://gazaskygeeks.com/" target="blank">
              <GroupPic src={gsgLogo} />
              Gaza Sky Geeks
            </LogoLink>
          </GroupMember>
        </GroupSection>

        <Subtitle>Resources</Subtitle>

        <div>
          <LogoLink href="https://www.flaticon.com/" target="blank">
            <FlaticonLogo src="https://media.flaticon.com/img/flaticon-logo-footer.svg" />
          </LogoLink>
        </div>
      </Wrapper>

      <Footer backLink="/summary" nextLink={null} reviewScenario={null} />
    </div>
  );
};

export default Credits;
