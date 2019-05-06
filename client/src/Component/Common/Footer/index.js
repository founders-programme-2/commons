import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
        <Link to={backLink}>
          <PreviousButton type="button" />
        </Link>
        {reviewScenario && (
          <BackToScenario type="button">
            Review <br />
            Scenario
          </BackToScenario>
        )}
        {nextLink && (
          <Link to={nextLink}>
            <NextButton type="button" />
          </Link>
        )}
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
