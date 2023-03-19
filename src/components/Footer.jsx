import React from 'react'
import Image from './Image';
import { Link } from 'react-router-dom'
import { GoMarkGithub } from "react-icons/go";
function Footer() {
  return (
    <footer className='bg-slate-800 flex flex-col  justify-evenly items-center py-3 text-white  text-center'>
      <h2 className='font-black py-3 md:p-0 text-3xl'>Simple-Pokedex</h2>
      <nav className='flex justify-between gap-6 items-center'>  
        <Link className=' flex flex-row items-center ' target='_blank' to={"https://github.com/cartesM87/Pokedex"}>
          <span className='mx-1 font-mono hover:text-sky-600 hover:underline'>Projecto</span>
          <GoMarkGithub className='text-2xl my-[2px] '/>
        </Link>
        <div className='bg-slate-800 flex flex-wrap p-1 gap-2 items-center'>
          <span>Pagina echa por </span>
          <Link className='' target='_blank' to={"https://github.com/cartesm"}>
            <span className='bg-rainbow font-bold'>Cartess</span>
          </Link>
          <Image 
            clas={"rounded-full w-7"}
            url={"https://avatars.githubusercontent.com/u/107580522?v=4"} 
            alt={"perfil"}
            />
        </div>
      </nav>
      
    </footer>
  )
}

export default Footer