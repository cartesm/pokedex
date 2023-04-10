import React,{useState} from 'react'
import { Link,useParams} from 'react-router-dom';
import {Image,Searcher,ListContainer} from "./index"
import {GoThreeBars} from "react-icons/go";

function Header() {

  

  const [display, setDisplay] = useState(false);
  const {id} = useParams();
  let controllerD=()=>{display?setDisplay(false):setDisplay(true)
  };

  return (
    <header >
        <div className='bg-slate-900 h-11 flex items-center justify-between md:justify-center'>
          
          <Link className='px-6' to={"/"}>
              <h1 className='font-black text-3xl text-white'>Simple Pokedex</h1>
          </Link>
          
          <button type='button' onClick={controllerD} className='md:hidden block px-6'>
            <GoThreeBars className='text-white text-2xl'/>
          </button>    
        </div>
       {id? <nav className={`${display?"flex":"hidden"} bg-gray-600 md:hidden flex-col justify-center items-center `}>
            <Searcher/>
            <ListContainer/>
        </nav>:undefined}
        
    </header>

    )
}

export default Header