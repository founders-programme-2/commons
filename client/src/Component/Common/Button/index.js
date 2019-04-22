import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButton } from './index.style';

const Button = props => {
  const { buttonText, onClick, height, width } = props;

  return (
    <PrimaryButton onClick={onClick} height={height} width={width}>
      {buttonText}
    </PrimaryButton>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
};
Button.defaultProps = {
  height: PropTypes.checkPropTypes(),
  width: PropTypes.checkPropTypes(),
};

export default Button;
