import React,{useState,useEffect,useContext} from 'react';
import {GoSearch} from "react-icons/go"
import {MdDataSaverOn} from "react-icons/md"
import "../styles.css";
import {dataContext} from "../context/DataContext"

function Searcher() {

  const {filterNames} = useContext(dataContext)

  
  useEffect(()=>{
   
  },[]);

  
  /**TODO: hacer que el boton de buiscar solo aparezca cuando el useParams no sea undefined */
  return (
    <form onSubmit={(e)=>{e.preventDefault();filterNames(e.target.elements.pokeInput.value)}} className={`mx-auto flex gap-1 my-10`} autoComplete='off'>
      <button type='submit' className='bg-rose-600 text-lg text-white rounded-lg px-2'>
        <MdDataSaverOn/>
      </button>
      <input type="text" name='pokeInput' className='outline-none rounded-lg pl-3 text-gray-700 font-sans' placeholder='Busca un Pokemon' />
      <button type="submit" className='bg-rose-600 text-lg text-white rounded-lg px-2'>
        <GoSearch/>  
      </button> 
    </form>
  )
}



export default Searcher