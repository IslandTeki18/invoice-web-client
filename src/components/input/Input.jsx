import React from "react";
import PropTypes from "prop-types";

const Input = (props) => {
  return (
    <input
      type={props.type}
      className={`form-control ${props.className ? props.className : ""}`}
      id={props.id}
      placeholder={props.placeholder}
      required={props.required}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

Input.defaultProps = {
  className: "",
  name: "",
  id: "",
  type: "",
  placeholder: "",
  required: false,
  value: "",
};

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Input;
