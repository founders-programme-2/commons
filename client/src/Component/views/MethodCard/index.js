import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Img,
  Info,
  MoreInfo,
  DefaultImg,
  ResourcePoints,
  ResourceStars,
  CardTitle,
  StarWrapper,
  UseResource,
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
import star from '../../../assets/star.svg';

class CardComponent extends Component {
  state = {
    checked: false,
  };

  // toggles checkbox on click
  toggleCheckbox = event => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const {
      cardImg,
      cardTitle,
      resourcePoints,
      chooseMethod,
      removeMethod,
      errorOverSpend,
      tools,
      priority,
    } = this.props;

    const { checked } = this.state;

    // looks at number of resource points and pushes as many stars to card
    const stars = points => {
      const starsCount = [];
      let counter = 0;
      while (points > counter) {
        // eslint-disable-next-line no-plusplus
        counter++;
        starsCount.push(
          <ResourceStars src={star} key={`resourceStars-${counter}`} />
        );
      }
      return starsCount;
    };
    // saves func output to variable for render
    const starsRender = stars(resourcePoints);
    return (
      <Fragment>
        <CardWrapper>
          {cardImg ? (
            <Img src={cardImg} alt="card logo" />
          ) : (
            <DefaultImg alt="default card image" />
          )}

          <Info>
            <CardTitle>{cardTitle}</CardTitle>
            <br />
            <MoreInfo to="./about"> Click for more info...</MoreInfo>
            <ResourcePoints>
              {resourcePoints} resource points
              <br />
            </ResourcePoints>
            <StarWrapper>{starsRender}</StarWrapper>
          </Info>
        </CardWrapper>

        {!tools && !priority ? (
          <UseResource>
            <label htmlFor="method-checkbox">
              Use this resource:
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <input
                id="method-checkbox"
                type="checkbox"
                checked={checked}
                onChange={event => {
                  this.toggleCheckbox(event);
                  if (checked === false) {
                    removeMethod(resourcePoints, event);
                    errorOverSpend();
                  } else if (checked === true) {
                    chooseMethod(resourcePoints, event);
                    errorOverSpend();
                  }
                }}
              />
            </label>
          </UseResource>
        ) : null}
        {tools && priority ? (
          <Fragment>
            <div>
              <Title>Prioritize:</Title>
              <Line />
              <FormWrap>
                <RadioWrap>
                  <Label htmlFor="low">
                    <Input type="radio" id="low" name="choose" />
                    Low
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="medium">
                    <Input type="radio" id="medium" name="choose" />
                    Medium
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="high">
                    <Input type="radio" id="high" name="choose" />
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
                  <Label htmlFor="short">
                    <Input type="radio" id="short" name="time-choose" />
                    <Span>short-term:</Span> <LightSpan>30 days</LightSpan>
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="mid">
                    <Input type="radio" id="mid" name="time-choose" />
                    <Span>mid-term:</Span> <LightSpan>6 months</LightSpan>
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="long">
                    <Input type="radio" id="long" name="time-choose" />
                    <Span>long-term:</Span> <LightSpan>+6 months</LightSpan>
                  </Label>
                </RadioWrap>
              </FormWrap>
            </TimelineWrap>
          </Fragment>
        ) : null}
      </Fragment>
    );
  }
}

CardComponent.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
  chooseMethod: PropTypes.func,
  removeMethod: PropTypes.func,
  errorOverSpend: PropTypes.func,
  tools: PropTypes.bool.isRequired,
  priority: PropTypes.bool.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
  chooseMethod: PropTypes.bool,
  removeMethod: PropTypes.bool,
  errorOverSpend: PropTypes.bool,
};

export default CardComponent;
