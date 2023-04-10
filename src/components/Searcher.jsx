import React,{useState,useEffect,useContext} from 'react';
import {GoSearch} from "react-icons/go"
import "../styles.css";
import {dataContext} from "../context/DataContext"

function Searcher() {

  const {filterNames} = useContext(dataContext)
  const [inputValue, setInputValue] = useState("");
  
  const changeValue = (e)=>{
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={(e)=>{e.preventDefault();filterNames(inputValue)}} className={`mx-auto justify-center flex gap-1 my-10`} autoComplete='off'>
      <input type="text" name='pokeInput' onChange={changeValue} value={inputValue} autoFocus className='outline-none rounded-lg py-1 pl-6 text-gray-700 font-sans' placeholder='Busca un Pokemon' />
      <button  type="submit" className='bg-blue-600 text-lg text-white rounded-lg px-2'>
        <GoSearch/>  
      </button> 
    </form>
  )
}



export default Searcher