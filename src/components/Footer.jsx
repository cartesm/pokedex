import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom'
import { GoMarkGithub } from "react-icons/go";
function Footer() {
  return (
    <footer className='bg-slate-900 flex flex-col  justify-evenly items-center py-3 text-white  text-center'>
      <h2 className='font-black py-3 text-3xl'>Simple-Pokedex</h2>
      <nav className='flex justify-between gap-6 py-1 items-center'>  
        <Link className=' flex flex-row items-center ' target='_blank' to={"https://github.com/cartesm/pokedex"}>
          <span className='mx-1 font-mono hover:underline'>Projecto</span>
          <GoMarkGithub className='text-2xl my-[2px] '/>
        </Link>
        <div className='flex flex-wrap items-center gap-2'>
          <span>Pagina desarrollada por </span>
          <Link className='' target='_blank' to={"https://github.com/cartesm"}>
            <span className='text-yellow-600 shadow-gold font-bold'>Cartess</span>
          </Link>
          <img src="https://avatars.githubusercontent.com/u/107580522?v=4" className='rounded-full w-8' alt="PerflGH" />
        </div>
      </nav>
      
    </footer>
  )
}

export default Footer