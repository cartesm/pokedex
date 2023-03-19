import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import {Image,Searcher} from "./index"
import {GoThreeBars} from "react-icons/go";

function Header() {

  const [display, setDisplay] = useState(false);
  let controllerD=()=>{display?setDisplay(false):setDisplay(true)};

  return (
    <header >
        <div className='bg-gray-800 h-11 flex items-center justify-start md:justify-center'>
          <button type='button' onClick={controllerD} className='md:hidden block pl-4'>
            <GoThreeBars className='text-white text-2xl'/>
          </button> 
          <Link className='px-6' to={"/"}>
              <Image preCharge={""} url={"/src/assets/pokelogo.png"} alt={"Logo"} clas={"img-shadow w-[100px] "} />
          </Link>   
        </div>
        <nav style={display?{display:"flex"}:{display:"none"}} className='flex md:hidden bg-gray-700 flex-col justify-center items-center px-4 gap-3'>
            <Searcher/>
        </nav>
    </header>

    )
}

export default Header