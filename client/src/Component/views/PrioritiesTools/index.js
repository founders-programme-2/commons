/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import MethodCard from '../MethodCard';
import {
  PrevBtn,
  NextBtn,
  Line,
  Title,
  FormWrap,
  RadioWrap,
  Input,
  TimelineWrap,
  Label,
  Span,
  LightSpan,
} from './index.style';

class PrioritiesTools extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header headerImg={null} titleText="Prioritize your tools" />
        <div>
          <Carousel
            enableKeyboardControls
            renderCenterLeftControls={({ previousSlide }) => (
              <PrevBtn onClick={previousSlide}>.</PrevBtn>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <NextBtn onClick={nextSlide}>.</NextBtn>
            )}
          >
            <MethodCard
              cardTitle="Example Card 1"
              resourcePoints={1}
              cardImg={null}
              chooseMethod={null}
              removeMethod={null}
              errorOverSpend={null}
              tools
            />
          </Carousel>
          <div>
            <Title>Prioritize:</Title>
            <Line />
            <FormWrap>
              <RadioWrap>
                <Label htmlFor="Low">
                  <Input type="radio" id="Low" name="choose" />
                  Low
                </Label>
              </RadioWrap>
              <RadioWrap>
                <Label htmlFor="Medium">
                  <Input type="radio" id="Medium" name="choose" />
                  Medium
                </Label>
              </RadioWrap>
              <RadioWrap>
                <Label htmlFor="High">
                  <Input type="radio" id="High" name="choose" />
                  High
                </Label>
              </RadioWrap>
            </FormWrap>
          </div>
          <Line />
          <TimelineWrap>
            <Title>Timeline of implementation:</Title>
            <Line />
            <FormWrap>
              <RadioWrap>
                <Label htmlFor="Low">
                  <Input type="radio" id="Low" name="choose" />
                  <Span>short-term:</Span> <LightSpan>30 days</LightSpan>
                </Label>
              </RadioWrap>
              <RadioWrap>
                <Label htmlFor="Medium">
                  <Input type="radio" id="Medium" name="choose" />
                  <Span>mid-term:</Span> <LightSpan>6 months</LightSpan>
                </Label>
              </RadioWrap>
              <RadioWrap>
                <Label htmlFor="High">
                  <Input type="radio" id="High" name="choose" />
                  <Span>long-term:</Span> <LightSpan>+6 months</LightSpan>
                </Label>
              </RadioWrap>
            </FormWrap>
          </TimelineWrap>
        </div>
        <Footer
          backLink="/priorities"
          nextLink="/priorities"
          reviewScenario={null}
        />
      </div>
    );
  }
}

export default PrioritiesTools;
