import React, {useState, useContext} from 'react';
import '@styles/AlphabetList.scss';
import Modal from '../components/Modal';
import AlphabetResult from '../components/AlphabetResult';
import AppContext from '../context/AppContext';
import AlphabetSearch from '../components/AlphabetSearch';
import { useEffect } from 'react';

const AlphabetList = () => {
	const [showModal, setShowModal] = useState({
		status: false,
		type: ''
	});
	const [letter, setLetter] = useState('a')
	const [parameter, setParameter] = useState('')
	const [resetSearch, setResetSearch] = useState(false)


	const { alphabet } = useContext(AppContext);
	const { letters, def } = alphabet;

	useEffect(()=>{
		if(parameter) {
			setLetter(parameter.at(0))
		}
	}, [parameter])

	const handlerChangeLetter = (letter) => {
		setLetter(letter)
		setParameter('')
		setResetSearch(true)
	}

	const handlerNewWord = (word) => {
		setParameter(word)
		setResetSearch(false)
	}

	const handlerAddNewWord = (word) => {
		def.push(word)
	}

	return (
		<section className="alphabet">
			<p className='alphabet-hero'>Selecciona la letra por la que empieza la palabra que estás buscando o busca en el buscador de palabras</p>
			<ul className="alphabet-list">
				{letters.map(a => (
					<li className={`alphabet-item ${letter == a && 'alphabet-item--active' }`} onClick={() => handlerChangeLetter(a)} key={a}>{a}</li>
				))}
			</ul>
			<div className='alphabet-results'>
				<div className='alphabet-side-left'>
					<div className='alphabet-letter'>{letter}</div>
				</div>
				<div className='alphabet-container'>
					
					{/* Parameter by letter */}
					{parameter == ''
					&& def 
					&& def
					.filter(a => a.word.startsWith(letter))
					.map(l => (
						<AlphabetResult key={l.word} word={l.word} definition={l.definition} />
					))}

					{/* Parameter by search */}
					{ parameter 
					&& def
					.filter(a => a.word == parameter )
					.map(l => (
						<AlphabetResult key={l.word} word={l.word} definition={l.definition} />
					))
					}
					
					<AlphabetSearch setShowModal={setShowModal} setNewWord={(word) => handlerNewWord(word)} resetParameter={resetSearch} />
					
					<div className='alphabet--separator'></div>
					
					<div className='alphabet-add-word'>
						<p>
							¡Ayuda a tus colegas escribiendo alguna palabra nueva!
						</p>
						<button onClick={()=>setShowModal({status: true, type: 'add-word'})}>Agregar palabra</button>
					</div>
				</div>
			</div>
			{showModal && (<Modal show={showModal.status} hide={()=>setShowModal({status: false, type: ''})} type={showModal.type} addNewWord={(newWord)=>handlerAddNewWord(newWord)} />)}
		</section>
	);
}

export default AlphabetList;
