import { dataTrivias } from '../data-trivias';
import Trivia from './Trivia';
import { useState } from 'react';
import SearchTrivia from './SearchTrivia';
import { useEffect } from 'react';

const Trivias = () => {
    const [trivias, setTrivias] = useState(dataTrivias);
    const [inputValue, setInputValue] = useState('');


    const inputValueOnChange = (e) =>{
        e.persist();
        setInputValue(e.target.value);
    }
 
    
    useEffect(() => {
        console.log("Search message inside useEffect: ", inputValue);
        const filteredTrivias = dataTrivias.filter((trivia) => trivia.title.toLowerCase().includes(inputValue.toLowerCase()) )
        setTrivias(filteredTrivias);
      }, [inputValue]);

   

    const removeTrivia = (id) => {
        const newTrivias = trivias.filter((trivia) => trivia.id !== id);
        setTrivias(newTrivias);
    }
    
    // if (trivias.length === 0) {
    //     return (
    //         <div className="container">
    //         <h2>No trivias left :(</h2>
    //         <button onClick = {()=>setTrivias(dataTrivias)} className="btn refresh-btn">Refresh</button>
    //         </div>
    //     )
    // }
    return (
        <div className="container">
            <h2>/ TRIVIAS</h2>
            <SearchTrivia inputValue ={inputValue} titleFilter={inputValueOnChange} /><div>
                {trivias.map((trivia)=> (<Trivia removeTrivia = {removeTrivia} key={trivia.id} {...trivia}></Trivia>))}
            </div>
        </div>
    )
}

export default Trivias