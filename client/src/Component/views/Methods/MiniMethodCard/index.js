import React, { Fragment } from 'react';
import { CardWrapper, CardTop, CardInfo } from './index.style';
import { MyContext } from '../../../../Context/ContextComponent';

const MiniCard = () => {
  const { selectedCards } = MyContext;

  selectedCards.map(card, () => {});

  return (
    <MyContext.Consumer>
      {context => {
        return (
          <Fragment>
            <CardWrapper>
              <CardTop>Card Top</CardTop>
              <CardInfo>Card info</CardInfo>
            </CardWrapper>
          </Fragment>
        );
      }}
    </MyContext.Consumer>
  );
};

export default MiniCard;
