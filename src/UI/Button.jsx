import React from 'react';

import '../styles/button.css';

const Button = ({children, onClick}) => {

  const onClickEvent = () => {
    if (typeof onClick === 'function') {
      onClick()
    }
  }

  return (
    <button 
      className="button__component" 
      onClick={() => onClickEvent()}
    >
      {children}
    </button>
  )
}

export default Button;