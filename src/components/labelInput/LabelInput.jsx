import "./LabelInput.scss";
import PropTypes from "prop-types";
import Input from "../input/Input";

const LabelInput = (props) => {
  return (
    <div className={`dkLabelInput ${props.className}`}>
      <label htmlFor={props.inputId} className="form-label">
        {props.label}
      </label>
      <Input
        type={props.inputType}
        className={`form-control ${
          props.inputClassName && props.inputClassName
        }`}
        id={props.inputId}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

LabelInput.defaultProps = {
  className: "",
  inputId: "",
  label: "Sample Label",
  inputLabel: "",
  inputClassName: "",
  placeholder: "",
  inputType: "text",
  required: false,
  value: "",
};

LabelInput.propTypes = {
  className: PropTypes.string,
  inputId: PropTypes.string,
  label: PropTypes.string,
  inputLabel: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default LabelInput;
