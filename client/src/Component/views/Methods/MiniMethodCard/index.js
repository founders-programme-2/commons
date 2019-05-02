import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, XBtn, CardTop, Title, CardInfo } from './index.style';
import { MyContext } from '../../../../Context/ContextComponent';

const MiniCard = props => {
  const { title, id, removeMethod, resourcePoints, toggleCheckbox } = props;
  return (
    <MyContext.Consumer>
      {context => {
        const { removeSelectedCard } = context;

        return (
          <Fragment>
            <CardWrapper>
              <CardTop>
                <XBtn
                  onClick={event => {
                    removeSelectedCard(id);
                    removeMethod(resourcePoints, event);
                    toggleCheckbox(event, id);
                  }}
                >
                  x
                </XBtn>
              </CardTop>
              <CardInfo>
                <Title>{title}</Title>
              </CardInfo>
            </CardWrapper>
          </Fragment>
        );
      }}
    </MyContext.Consumer>
  );
};

MiniCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MiniCard;
