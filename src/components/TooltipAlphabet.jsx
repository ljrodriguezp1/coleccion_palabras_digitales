import React from 'react';
import '@styles/TooltipAlphabet.scss';

const TooltipAlphabet = ({text, direction='left'}) => {
    return (
        <span className={`tooltip-text tooltip--${direction}`}>{text}</span>
    )
}

export default TooltipAlphabet;