/* eslint-disable react/no-unused-state */
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
// import { MyContext } from '../../../Context/ContextComponent';

class YourScenario extends Component {
  state = {
    slideIndex: 0,
    selectedBox: undefined,
  };

  afterSlide = slideIndex => {
    this.setState({ slideIndex });
    console.log('slideIndex', slideIndex);
  };

  toggleChange = e => {
    const { selectedBox } = this.state;
    this.setState({ selectedBox: e.target.value });
    console.log('selectedBox ', selectedBox);
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
            Your goal as a community connector is to select the tools that you
            would use to faciliate creating this Connected Commons Program. You
            have a limited amount of resources and must choose wisely.
          </p>
          <br />
          <br />
          <Line />
          <br />
          <h2>Challenges</h2>
          <ul>
            <li>
              People don&#39;t know enough about what is going on in Slipham.
            </li>
            <li>
              Groups and individuals lack ways to share skills, tools, and space
            </li>
            <li>Community connectors lack support</li>
            <li>
              There is no heritage trail of other way to discover and explore
              Slipham&#39;s culture and history.
            </li>
            <li>People need help in developing idea into projects</li>
            <li>
              Social media is widely used, but messages are not shared across
              systems.
            </li>
            <li>
              Groups lack the knowledge and skills to use technology effectively
            </li>
            <li>Events are poorly organised with little follow through.</li>
          </ul>
          <br />
          <p>Which challenges do you wish to address?</p>
        </Content>
        <Line />
        <br />
        <h2>Community Connectors</h2>
        <HeadLine>
          The role of the community connector is to use a range of methods, some
          face-to-face and some online, to help people to address the challenges
          as individuals, in groups, or by starting projects. Some connectors
          are paid by the Slipham action centre, some are local volunteers. Here
          are some of the people in Slipham who are acting as community
          connectors. Who would you like to be, to meet the challenges?
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
                      id={element.id}
                      value={element.id}
                      checked={this.state.selectedBox === element.id}
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
          nextLink="/activities"
          reviewScenario={false}
        />
      </div>
    );
  }
}

export default YourScenario;
