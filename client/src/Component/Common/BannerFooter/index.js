import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button';
import {
  BannerFooterWrapper,
  ArrowIcon,
  TitleText,
  ButtonWrapper,
} from './index.style';

const BannerFooter = props => {
  const { arrow, text, select, history } = props;

  if (select) {
    return (
      <BannerFooterWrapper>
        <ButtonWrapper>
          <Button buttonText="Go back" onClick={() => history.goBack()} />
          <Button
            buttonText="I’m done, let’s move on"
            onClick={() => history.push('/Methods')}
          />
        </ButtonWrapper>
      </BannerFooterWrapper>
    );
  }

  if (arrow && text) {
    return (
      <BannerFooterWrapper>
        <TitleText>{text}</TitleText>
        <Link to="/about">
          <ArrowIcon>
            <FontAwesomeIcon icon="chevron-down" size="10x" />
          </ArrowIcon>
        </Link>
      </BannerFooterWrapper>
    );
  }

  return (
    <BannerFooterWrapper>
      <Link to="/">
        <ArrowIcon>
          <FontAwesomeIcon icon="chevron-down" size="10x" />
        </ArrowIcon>
      </Link>
    </BannerFooterWrapper>
  );
};

BannerFooter.propTypes = {
  text: PropTypes.string,
  select: PropTypes.bool,
  arrow: PropTypes.bool.isRequired,
  history: PropTypes.isRequired,
};

BannerFooter.defaultProps = {
  text: PropTypes.bool,
  select: PropTypes.bool,
};

export default BannerFooter;
