import React, { Component } from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PDFDoc from '../../PDFDoc';
import Test from '../../PDFDoc/Test';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Timeline from '../../Timeline';
import { MyContext } from '../../../Context/ContextComponent';
import {
  ContentAbout,
  Description,
  Line,
  Subtitle,
  MethodResourceList,
  MethodResource,
} from './index.style';

class Summary extends Component {
  state = {};

  render() {
    const { selectedCards, selectedPriority, selectedTime } = this.context;
    console.log('111111111111this.context:', this.context);
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
            Your lowest prioritised tools are on the left of the graph while
            your highest priorities are illustrated on the right.
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
          {/* <PDFDownloadLink document={<PDFDoc />}>
          {({ loading }) =>
            loading ? 'Loading document...' : 'Download Your Plan!'
          }
        </PDFDownloadLink> */}
          <Test />
          <PDFViewer>
            <PDFDoc
              selectedCards={selectedCards}
              selectedPriority={selectedPriority}
              selectedTime={selectedTime}
            />
          </PDFViewer>
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
  }
}
Summary.contextType = MyContext;

// Method resources to be implemented once methods are passed down from state.
export default Summary;
