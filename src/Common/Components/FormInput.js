import React from 'react';
import PropTypes from 'prop-types';


const FormInput = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-input">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
        required
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
