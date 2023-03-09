import React from "react";
import PropTypes from "prop-types";

const PassiveButton = ({ title, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={className} title={title}>
      {title}
    </button>
  );
};

PassiveButton.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default PassiveButton;
