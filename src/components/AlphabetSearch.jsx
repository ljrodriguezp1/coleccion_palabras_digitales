import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppContext from '../context/AppContext';


const AlphabetSearch = ({ setShowModal, setNewWord, resetParameter }) => {

    const { alphabet } = useContext(AppContext);
    const { letters, def } = alphabet;
    const [inputSearch, setInputSearch] = useState('');
    const [resultsSearch, setResultsSearch] = useState([])

    const handlerSearch = (event) => {
        let valueInput = event.currentTarget.value.toLowerCase();
        setInputSearch(valueInput)
        const filter = def.filter(d => d.word.search(valueInput) >= 0)
        setResultsSearch(filter);
    }

    const handlerClickSearch = () => {
        if (resultsSearch.length == 0 ) {
            setShowModal({ status: true, type: 'no-result' })
        }
    }

    useEffect(()=> {
        if(resetParameter) {
            setInputSearch('')
            setResultsSearch([])
        }
    }, [resetParameter])

    return (
        <div className='alphabet-search'>
            <input value={inputSearch} onChange={handlerSearch} type="text" placeholder='Busca una palabra' />
            <button onClick={() => handlerClickSearch()}>Buscar</button>
            {inputSearch != '' && resultsSearch.length > 0 && (
                <ul className="alphabet-search-results">
                    {resultsSearch && resultsSearch.map((r, k) => {
                        return (
                            k < 3
                            ? <li key={k} onClick={() => setNewWord(r.word)}>{r.word}</li>
                            : ''
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default AlphabetSearch;