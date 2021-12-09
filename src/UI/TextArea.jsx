import React, { useState } from 'react';

import '../styles/textarea.css';

const TextArea = ({id, name, label, placeholder, value, onChange, children}) => {
  const [focus, setFocus] = useState(false);

  const onChangeEvent = (e) => {
    if (typeof onChange === 'function') {
      onChange(e)
    }
  }

  return (
    <div className="textarea__wrapper">
      {label &&
        <label 
          htmlFor="id"
          className="textarea__label"
        >
          {label}
       </label>
      }

      <textarea 
        type="text" 
        id={id}
        name={name}
        className="textarea__block" 
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={e => onChangeEvent(e)}
      /> 

      {!focus &&
        <div className="textarea__icon">
          {children}
        </div>
      }
    </div>
  )
}

export default TextArea;