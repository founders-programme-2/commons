import React from 'react';
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
  // const { nextLink, backLink, reviewScenario } = props;

  if (reviewScenario) {
    return (
      <React.Fragment>
        <Line />
        <Buttons>
          <PreviousButton as={Link} to={backLink} type="button" />
          <BackToScenario>Review Scenario</BackToScenario>
          <NextButton as={Link} to={nextLink} type="button" />
        </Buttons>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Line />
      <Buttons>
        <PreviousButton as={Link} to={backLink} type="button" />
        <NextButton as={Link} to={nextLink} type="button" />
      </Buttons>
    </React.Fragment>
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
