import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {Image,Searcher} from "./index"
import {GoThreeBars,GoSearch} from "react-icons/go";

function Header() {

  

  const [display, setDisplay] = useState(false);
  let controllerD=()=>{display?display(false):setDisplay(true)
  console.log(display);};

  return (
    <header >
        <div className='bg-slate-900 h-11 flex items-center justify-between md:justify-evenly'>
          
          <Link className='px-6' to={"/"}>
              <Image preCharge={""} url={"/src/assets/pokelogo.png"} alt={"Logo"} clas={"img-shadow w-[100px] "} />
          </Link>
          <nav className='text-white hidden md:flex gap-3 items-center'>
            <a href="">kdufhg</a>
            <a href="">kdufhg</a>
            <a href="">kdufhg</a>
          </nav>
          
          <button type='button' onClick={controllerD} className='md:hidden block px-6'>
            <GoThreeBars className='text-white text-2xl'/>
          </button>    
        </div>
        <nav className={`${display?"flex":"hidden"} bg-[#191e29] flex-col justify-center items-center gap-3`}>
            <Searcher/>
        </nav>
        
    </header>

    )
}

export default Header