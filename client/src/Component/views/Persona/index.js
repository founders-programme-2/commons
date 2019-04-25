import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Swal from 'sweetalert2';
import { PrevBtn, NextBtn } from '../Methods/index.style';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { Description } from './index.style';
import { CardWrapper, Img, CardTitle, Info } from '../MethodCard/index.style';
import PersonaData from '../../../fakeData/persona';

class Persona extends Component {
  state = {
    slideIndex: 0,
  };

  afterSlide = slideIndex => {
    this.setState({ slideIndex });
  };

  handelIndexSlide = () => {
    const { slideIndex } = this.state;
    this.setState({ slideIndex: !slideIndex });
    Swal.fire('you select this persona');
  };

  render() {
    return (
      <div>
        <Header headerImg={null} titleText="Selection your persona" />
        <div>
          <Carousel
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
                <CardWrapper
                  heightCard="60.5rem"
                  widthtCard="20rem"
                  key={element.id}
                >
                  <Img heightImg="19.6rem" src={element.img} alt="PersonImg" />
                  <Info heightInfoCard="30rem">
                    <CardTitle textAlign="center">{element.title}</CardTitle>
                    <Description>{element.text}</Description>
                  </Info>
                </CardWrapper>
              );
            })}
          </Carousel>
        </div>
        <Footer backLink="/yourScenario" nextLink="/" reviewScenario={false} />
      </div>
    );
  }
}

export default Persona;
