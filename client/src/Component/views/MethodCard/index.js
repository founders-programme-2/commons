import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { MyContext } from '../../../Context/ContextComponent';
import {
  CardWrapper,
  Img,
  Info,
  DefaultImg,
  ResourcePoints,
  ResourceStars,
  CardTitle,
  StarWrapper,
  UseResource,
  InfoText,
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
    defaultPriority: '',
    defaultTime: '',
  };

  selectedPriority = event => {
    const { id } = event.target.dataset;
    this.setState({ defaultPriority: event.target.value }, () => {
      const { defaultPriority } = this.state;
      const { selectedPriorityStore } = this.context;
      selectedPriorityStore(defaultPriority, id);
    });
  };

  selectedTime = event => {
    const { id } = event.target.dataset;
    this.setState({ defaultTime: event.target.value }, () => {
      const { defaultTime } = this.state;
      const { selectedTimeStore } = this.context;
      selectedTimeStore(defaultTime, id);
    });
  };

  // toggles checkbox on click
  // eslint-disable-next-line no-unused-vars
  toggleCheckbox = event => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  // looks at number of resource points and pushes as many stars to card
  stars = points => {
    const starsCount = [];
    let counter = 0;
    while (points > counter) {
      counter += 1;
      starsCount.push(
        <ResourceStars src={star} key={`resourceStars-${counter}`} />
      );
    }
    return starsCount;
  };

  render() {
    const {
      cardImg,
      cardTitle,
      resourcePoints,
      chooseMethod,
      datatestid,
      removeMethod,
      errorOverSpend,
      description,
      requiredCards,
      use,
      category,
      difficulty,
      id,
      tools,
      priority,
    } = this.props;

    const { checked, defaultPriority, defaultTime } = this.state;
    const { addSelectedCard, removeSelectedCard } = this.context;
    // saves func output to variable for render
    const starsRender = this.stars(resourcePoints);
    return (
      <Fragment>
        <CardWrapper>
          {cardImg === null ? (
            <Img src={cardImg} alt="card logo" />
          ) : (
            <DefaultImg alt="default card image" />
          )}
          <Info>
            <CardTitle>{cardTitle}</CardTitle>
            <br />
            <InfoText>{description}</InfoText>
            <br />
            <br />
            Requires: <InfoText>{requiredCards}</InfoText>
            <br />
            Difficulty: <InfoText>{difficulty}</InfoText>
            <br />
            Used by: <InfoText>{use}</InfoText>
            <br />
            Category: <InfoText>{category}</InfoText>
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
                data-testid={datatestid}
                id="method-checkbox"
                type="checkbox"
                checked={checked}
                onChange={event => {
                  this.toggleCheckbox(event);
                  if (checked === false) {
                    removeMethod(resourcePoints, event);
                    addSelectedCard(id);
                    errorOverSpend();
                  } else if (checked === true) {
                    chooseMethod(resourcePoints, event);
                    removeSelectedCard(id);
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
                    <Input
                      data-id={id}
                      type="radio"
                      id="low"
                      name="choose"
                      value="low"
                      checked={defaultPriority === 'low'}
                      onChange={this.selectedPriority}
                    />
                    Low
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="medium">
                    <Input
                      data-id={id}
                      type="radio"
                      id="medium"
                      name="choose"
                      value="medium"
                      checked={defaultPriority === 'medium'}
                      onChange={this.selectedPriority}
                    />
                    Medium
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="high">
                    <Input
                      data-id={id}
                      type="radio"
                      id="high"
                      name="choose"
                      value="high"
                      checked={defaultPriority === 'high'}
                      onChange={this.selectedPriority}
                    />
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
                    <Input
                      data-id={id}
                      type="radio"
                      id="short"
                      name="time-choose"
                      value="short"
                      checked={defaultTime === 'short'}
                      onChange={this.selectedTime}
                    />
                    <Span>short-term:</Span> <LightSpan>30 days</LightSpan>
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="mid">
                    <Input
                      data-id={id}
                      type="radio"
                      id="mid"
                      name="time-choose"
                      value="mid"
                      checked={defaultTime === 'mid'}
                      onChange={this.selectedTime}
                    />
                    <Span>mid-term:</Span> <LightSpan>6 months</LightSpan>
                  </Label>
                </RadioWrap>
                <RadioWrap>
                  <Label htmlFor="long">
                    <Input
                      data-id={id}
                      type="radio"
                      id="long"
                      name="time-choose"
                      value="long"
                      checked={defaultTime === 'long'}
                      onChange={this.selectedTime}
                    />
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
  id: PropTypes.number.isRequired,
  cardImg: PropTypes.func,
  cardTitle: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  resourcePoints: PropTypes.number.isRequired,
  chooseMethod: PropTypes.func,
  removeMethod: PropTypes.func,
  errorOverSpend: PropTypes.func,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.string,
  requiredCards: PropTypes.string,
  use: PropTypes.string,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  tools: PropTypes.bool.isRequired,
  priority: PropTypes.bool.isRequired,
};

CardComponent.defaultProps = {
  cardImg: PropTypes.bool,
  difficulty: PropTypes.bool,
  requiredCards: PropTypes.bool,
  use: PropTypes.bool,
  chooseMethod: PropTypes.bool,
  removeMethod: PropTypes.bool,
  errorOverSpend: PropTypes.bool,
};

CardComponent.contextType = MyContext;

export default CardComponent;
