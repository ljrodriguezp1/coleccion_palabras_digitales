import React from "react";
import { FaStar } from 'react-icons/fa';
import TooltipAlphabet from './TooltipAlphabet';

const AlphabetResult = ({word, definition}) => {

    return <div className='alphabet-result'>
                <div className='alphabet-letter-detail'>
                    <h4>{word}</h4>
                    <div className='alphabet-add-highlight'>
                        <div className="tooltip-alphabet ">
                            <TooltipAlphabet text={'Agregar a destacados'} direction="right" />
                            <FaStar />
                        </div>
                    </div>
                </div>
                <div className='alphabet-detail'>{definition}</div>
            </div>
}

export default AlphabetResult;