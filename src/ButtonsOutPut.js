import React from 'react';
import './Button.ccs';

const Button2 = ({ decrement }) => {
    return (
        <button className="Button" onClick={decrement}>
            -
        </button>
    )
}

export default ButtonsOutput;