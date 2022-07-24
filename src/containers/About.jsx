import React from 'react';
import '@styles/AlphabetList.scss';
import { FaCaretLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className='about alphabet'>
			
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
					<h2 className='alphabet-title'>¿Qué es esto?</h2>
                    <p className='alphabet-description'>
                    Esto es una herramienta digital con la que contarás para entender algunos conceptos que has escuchado en charlas, conferencias o capacitaciones o que a lo mejor has visto en internet y no logras conectarlos con tú qué hacer pedagógico diario. Aquí también podrás ayudar a tus colegas agregando palabras que conozcas y que creas que son importantes en el ámbito educativo pero sobretodo en el uso de herramientas digitales. 
                    </p>
				</div>
			</div>
        </section>
    )
}

export default About;