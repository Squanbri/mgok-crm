import React from 'react';
import "../styles/button.css";

const Button = ({children, type, style, ...props}) => {
    return (
        <button
            style={style}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;