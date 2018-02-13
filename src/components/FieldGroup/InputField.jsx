import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const InputField = ( { id, label, value, onChange } ) => {
  return (
    <div className="field-group">
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} value={value} onChange={onChange}/>
    </div>
  )
};

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};