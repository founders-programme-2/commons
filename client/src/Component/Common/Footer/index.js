import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Buttons,
  NextButton,
  PreviousButton,
  BackToScenario,
  Line,
} from './Footer.style';

const Footer = ({ nextLink, backLink, reviewScenario }) => {
  return (
    <Fragment>
      <Line />
      <Buttons>
        <PreviousButton as={Link} to={backLink} type="button" />
        {reviewScenario && <BackToScenario>Review Scenario</BackToScenario>}
        {nextLink && <NextButton as={Link} to={nextLink} type="button" />}
      </Buttons>
    </Fragment>
  );
};

Footer.propTypes = {
  backLink: PropTypes.string.isRequired,
  nextLink: PropTypes.string,
  reviewScenario: PropTypes.bool,
};

Footer.defaultProps = {
  nextLink: PropTypes.bool,
  reviewScenario: PropTypes.bool,
};

export default Footer;
