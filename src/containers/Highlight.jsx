import React from 'react';
import '@styles/AlphabetList.scss';
import { FaCaretLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Dnd from '../components/Dnd';

const Highlight = () => {

    return (
        <section className='highlight alphabet'>

            <p className='alphabet-hero alphabet-hero--back'>
                <Link to="/">
                    <FaCaretLeft />
                    Volver
                </Link>
            </p>
            <div className='alphabet--separator'></div>
            <div className='alphabet-results'>
                <div className='alphabet-side-left'>
                </div>
                <div className='alphabet-container'>
                    <h2 className='alphabet-title'>Destacados</h2>
                    <p className='alphabet-description'>
                        Para que puedas recordar más palabras con facilidad, toma la caja de la esquina superior derecha y arrastrala hasta los primeros lugares
                    </p>
                    <div className='dnd'>
                        <Dnd />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlight;