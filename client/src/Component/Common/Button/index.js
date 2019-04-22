import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './index.style';

const Button = props => {
  const { buttonText, onClick, height } = props;

  return (
    <PrimaryButton onClick={onClick} height={height}>
      {buttonText}
    </PrimaryButton>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  height: PropTypes.string,
};
Button.defaultProps = {
  height: PropTypes.checkPropTypes(),
};

export default Button;
