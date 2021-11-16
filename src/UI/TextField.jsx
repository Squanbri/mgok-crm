import React, { useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

import '../styles/textfield.css';

const TextField = ({label, placeholder, value, onChange, children}) => {
  const [id] = useState(_uniqueId('TextField-'));
  const [focus, setFocus] = useState(false);

  const onChangeEvent = (e) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div className="input__wrapper">
      <label 
        htmlFor="id"
        className="input__label"
      >
        {label}
      </label>

      <input 
        type="text" 
        id={id}
        className="input__block" 
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => onChangeEvent(e)}
      /> 

      {!focus &&
        <div className="input__icon">
          {children}
        </div>
      }
    </div>
  )
}

export default TextField;