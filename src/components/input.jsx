import React from 'react';
import "../styles/Input.css";

const Input = ({children, ...props}) => {
    return (
        <input
            className="input-component"
            {...props}
        >

        </input>
    );
};

export default Input;