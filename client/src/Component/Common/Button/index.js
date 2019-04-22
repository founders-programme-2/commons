import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './index.style';

const Button = props => {
  const { buttonText, onClick } = props;

  return <PrimaryButton onClick={onClick}>{buttonText}</PrimaryButton>;
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
