import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDoc from '../../PDFDoc';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Timeline from '../../Timeline';
import {
  ContentAbout,
  Description,
  Line,
  Subtitle,
  MethodResourceList,
  MethodResource,
} from './index.style';

const Summary = () => {
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
      <div>
        <PDFDownloadLink document={<PDFDoc />}>
          {({ loading }) =>
            loading ? 'Loading document...' : 'Download Your Plan!'
          }
        </PDFDownloadLink>
      </div>
      <Subtitle>Resources</Subtitle>
      <MethodResourceList>
        <MethodResource>
          <a href="http://google.com" target="blank">
            This is where we might list links to resources
          </a>
        </MethodResource>
      </MethodResourceList>

      <Footer
        backLink="/priority-tools"
        nextLink="/credits"
        reviewScenario={null}
      />
    </div>
  );
};
// Method resources to be implemented once methods are passed down from state.
export default Summary;
