import React, { useState } from 'react';

import '../styles/textfield.css';

const TextField = ({id, name, label, placeholder, value, onChange, children}) => {
  const [focus, setFocus] = useState(false);

  const onChangeEvent = (e) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div className="input__wrapper">
      {label &&
        <label 
          htmlFor="id"
          className="input__label"
        >
          {label}
       </label>
      }

      <input 
        type="text" 
        id={id}
        name={name}
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