import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BannerFooterWrapper, ArrowIcon, TitleText } from './index.style';

const BannerFooter = props => {
  return (
    <BannerFooterWrapper>
      <TitleText>
        A game to nurture and develop common places , and provide for
        collaboration in communities and networks
      </TitleText>
      <Link to="./about">
        <ArrowIcon>
          <FontAwesomeIcon icon="chevron-down" size="10x" />
        </ArrowIcon>
      </Link>
    </BannerFooterWrapper>
  );
};

BannerFooter.propTypes = {
  // headerImg: PropTypes.string,
  // titleText: PropTypes.string.isRequired,
};

BannerFooter.defaultProps = {
  // headerImg: PropTypes.bool,
};

export default BannerFooter;
