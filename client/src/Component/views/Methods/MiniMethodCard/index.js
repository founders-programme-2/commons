import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, XBtn, CardTop, Title, CardInfo } from './index.style';

const MiniCard = props => {
  const { title } = props;

  return (
    <Fragment>
      <CardWrapper>
        <CardTop>
          <XBtn>X</XBtn>
        </CardTop>
        <CardInfo>
          <Title>{title}</Title>
        </CardInfo>
      </CardWrapper>
    </Fragment>
  );
};

MiniCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MiniCard;
