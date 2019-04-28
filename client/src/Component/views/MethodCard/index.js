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
    defaultPriority: 'low',
    defaultTime: 'short',
  };

  // componentDidMount() {
  //   let value = this.context;
  //   console.log(value);
  // }

  selectedPriority = event => {
    const id = event.target.dataset.id;
    // event.persist();

    this.setState({ defaultPriority: event.target.value }, () => {
      this.context.selectedPriorityStore(this.state.defaultPriority, id);
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

    // saves func output to variable for render
    const starsRender = this.stars(resourcePoints);
    return (
      <MyContext.Consumer>
        {context => {
          const {
            addSelectedCard,
            removeSelectedCard,
            selectedPriorityStore,
          } = context;
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
                            type="radio"
                            id="short"
                            name="time-choose"
                            value="short"
                            // checked={selectedTime === 'short'}
                            // onChange={event => handleSelectedTime(event)}
                          />
                          <Span>short-term:</Span>{' '}
                          <LightSpan>30 days</LightSpan>
                        </Label>
                      </RadioWrap>
                      <RadioWrap>
                        <Label htmlFor="mid">
                          <Input
                            type="radio"
                            id="mid"
                            name="time-choose"
                            value="mid"
                            // checked={selectedTime === 'mid'}
                            // onChange={event => handleSelectedTime(event)}
                          />
                          <Span>mid-term:</Span> <LightSpan>6 months</LightSpan>
                        </Label>
                      </RadioWrap>
                      <RadioWrap>
                        <Label htmlFor="long">
                          <Input
                            type="radio"
                            id="long"
                            name="time-choose"
                            value="long"
                            // checked={selectedTime === 'long'}
                            // onChange={event => handleSelectedTime(event)}
                          />
                          <Span>long-term:</Span>{' '}
                          <LightSpan>+6 months</LightSpan>
                        </Label>
                      </RadioWrap>
                    </FormWrap>
                  </TimelineWrap>
                </Fragment>
              ) : null}
            </Fragment>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  cardImg: PropTypes.func,
  cardTitle: PropTypes.string.isRequired,
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
