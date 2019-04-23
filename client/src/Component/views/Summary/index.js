import React from "react";
import Header from "../../Common/Header";
import Footer from "../../Common/Footer";
import {
  ContentAbout,
  Description,
  Line,
  TimelinePlaceholder,
  Subtitle,
  MethodResourceList,
  MethodResource
} from "./index.style";

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
      <TimelinePlaceholder>I am the timeline</TimelinePlaceholder>
      <Line />
      <Subtitle>Resources</Subtitle>
      <MethodResourceList>
        <MethodResource>
          <a href="" target="blank">
            Network Map
          </a>
        </MethodResource>
      </MethodResourceList>
    </div>
  );
};

export default Summary;
