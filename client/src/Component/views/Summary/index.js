import React from 'react';
import Header from '../../Common/Header';
import Timeline from '../../Timeline';
import {
  ContentAbout,
  Description,
  Line,
  Subtitle,
  MethodResourceList,
  MethodResource,
} from './index.style';

const Summary = props => {
  return (
    <div>
      <Header headerImg={null} titleText="Selection Summary" />
      <ContentAbout>
        <Description>
          The graph below illustrates how you have prioritised your tool
          selection.
        </Description>
        <Description>
          A timeline representing from short- to long-term runs top to bottom.
        </Description>
        <Description>
          Your lowest prioritised tools are on the left of the graph while your
          highest priorities are illustrated on the right.
        </Description>
        <Description>
          Does your plan include methodologies from short-term to long-term?
        </Description>
        <Description>Have you prioritised realistically?</Description>
      </ContentAbout>
      <Line />
      <Subtitle>Your Action Plan</Subtitle>
      <Timeline />
      <Subtitle>Resources</Subtitle>
      <MethodResourceList>
        <MethodResource>
          <a href="http://google.com" target="blank">
            Network Map
          </a>
        </MethodResource>
      </MethodResourceList>
    </div>
  );
};
// Method resources to be implemented once methods are passed down from state.
export default Summary;
