import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export const SelectField = ( { id, label, options, onChange } ) => {
  return (
    <div className="field-group">
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={onChange}>
        {options.map( item => <option value={item} key={item}>{item}</option> )}
      </select>
    </div>
  )
};

SelectField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};