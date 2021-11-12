import React, { useState } from "react";
import _uniqueId from 'lodash/uniqueId';

import '../styles/switch.css'

const Switch = ({ checked, onChange }) => {
  const [id] = useState(_uniqueId('Switch-'));

  const onChangeEvent = () => {
    if (typeof onChange === 'function') {
      onChange()
    }
  }

  return (
    <>
      <input 
        type="checkbox" 
        name="switch" 
        id={id} 
        className="switch__input"
        checked={checked ?? false}
        onChange={e => onChangeEvent(e)}
        onClick={e => e.stopPropagation()}
      />
      <label 
        htmlFor={id}
        className={checked ? 'switch__label switch_active' : 'switch__label'}
        onClick={e => e.stopPropagation()}
      > 

      </label>
    </>
  );
};

export default Switch;
