import React, { useState } from 'react';
import '@styles/Header.scss';
import { FaStar } from 'react-icons/fa';
import { NavLink, Link } from "react-router-dom";

const Header = () => {

	return (
		<nav>
			<div className='header header--1'>
				<div className='header-title'>
					<Link to="/"><h2>Colección</h2></Link>
				</div>
				<div className='header-space'></div>
			</div>
			<div className='header header--2'>
				<div className='header-title'>
					<Link to="/"><h2>de palabras</h2></Link>
				</div>
				<div className='header-space'></div>
			</div>
			<div className='header header--3'>
				<div className='header-title'>
					<Link to="/"><h2>digitales</h2></Link>
				</div>
				<div className='header-space'></div>
				<div className='header-menu'>
					<div className="navbar-right">
						<ul>
							<li>
								<NavLink to="/" exact activeClassName="active">Colección</NavLink>
							</li>
							<li>
								<NavLink to="/que-es-esto" activeClassName="active">¿Qué es esto?</NavLink>
							</li>
							<li>
								<NavLink to="/destacados" activeClassName="active">
									<FaStar />
									Destacados
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Header;
