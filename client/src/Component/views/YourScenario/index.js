import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { PrevBtn, NextBtn } from '../Methods/index.style';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Description, HeadLine, Label, Input } from './index.style';
import { CardWrapper, Img, CardTitle, Info } from '../MethodCard/index.style';
import { Content } from '../About/index.style';
import { Line } from '../../Common/Header/index.style';
import PersonaData from '../../../data/persona';
import houses from '../../../assets/houses.svg';

class YourScenario extends Component {
  state = {
    slideIndex: 0,
    isChecked: true,
  };

  afterSlide = slideIndex => {
    this.setState({ slideIndex });
    console.log('slideIndex',slideIndex);
  };

  toggleChange = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
    console.log('checked', isChecked);
  };

  render() {
    return (
      <div>
        <Header headerImg={houses} titleText="Your scenario" />
        <Content>
          <p>
            The Slipham social action centre is launching a Connected Commons
            programme, aiming to help people explore its heritage, find local
            opportunities and services, and support new projects for a better
            Slipham in the future. It will do this by mapping people, projects
            and groups to find what they can offer, what they need, and how they
            are connected at present. The Commons won&apos;t be just one
            physical space. It will be on-the-ground trails and gathering
            points, maps of doing what, a website and other communication tools,
            with guides for action. We&apos;ll have small grants to support
            projects, and help on fundraising. The overall aim is to create an
            environment within which connections and collaborations can take
            place - the Slipham Connected Commons.
          </p>
          <br />
          <p style={{ fontWeight: 'bold' }}>
            Your goal is to select the tools that you would use to faciliate
            creating this Connected Commons Program. You have a limited amount
            of resources and must choose wisely.
          </p>
        </Content>
        <Line />
        <HeadLine>
          Here are some potential user personas that you can keep in mind while
          while you choose your methods.
        </HeadLine>
        <div>
          <Carousel
            wrapAround
            slideIndex={this.slideIndex}
            afterSlide={this.afterSlide}
            enableKeyboardControls
            renderCenterLeftControls={({ previousSlide }) => (
              <PrevBtn onClick={previousSlide}>.</PrevBtn>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <NextBtn onClick={nextSlide}>.</NextBtn>
            )}
          >
            {PersonaData.map(element => {
              return (
                <CardWrapper key={element.id}>
                  <Img heightImg="auto" src={element.img} alt="PersonImg" />
                  <Info>
                    <CardTitle textAlign="center">{element.title}</CardTitle>
                    <Description>{element.text}</Description>
                  </Info>
                  <Label htmlFor="persona">
                    <Input
                      type="checkbox"
                      id="persona"
                      value="persona"
                      defaultChecked={this.isChecked}
                      onChange={this.toggleChange}
                    />
                    choose only one persona.
                  </Label>
                </CardWrapper>
              );
            })}
          </Carousel>
        </div>
        <Footer
          backLink="/play"
          nextLink="/challenges"
          reviewScenario={false}
        />
      </div>
    );
  }
}

export default YourScenario;
