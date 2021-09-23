import React from 'react';
import Trivia from './Trivia';

const SearchTrivia = ({inputValue, titleFilter}) => {

 return (<div>
     <form>
         <label htmlFor = "title">Search trivia</label>
         <input type="text" id="title" value={inputValue} onChange={titleFilter}></input>
     </form>
 </div>)
}

export default SearchTrivia