import React from 'react';
import './Button.css';


const Button1 = ({ increment }) => {
    return (
        <button className="Button" onClick={increment}>
            +
        </button>
    )
}

export default Button1;