import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BannerFooterWrapper, ArrowIcon, TitleText } from './index.style';

const BannerFooter = props => {
  const { arrow, text } = props;

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
  arrow: PropTypes.string.isRequired,
};

BannerFooter.defaultProps = {
  text: PropTypes.bool,
};

export default BannerFooter;
