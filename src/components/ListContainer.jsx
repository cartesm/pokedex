import React,{useContext,useEffect,useState} from 'react'
import {Image} from "./index"
import { Link} from 'react-router-dom'
import {dataContext} from "../context/DataContext"
function ListContainer() {

 
        const {dataSearch,firstLeterUP, } = useContext(dataContext);
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    setPokeData(dataSearch)
  })
  

  if(pokeData.length===0) return undefined;

  return (
    <div className={`mx-auto grid grid-cols-3 md:grid-cols-5 ${pokeData.length>10?" h-[300px]":""} md:w-[850px] overflow-x-auto bg-[#191e29] p-2 m-2 rounded-lg`}>
      {pokeData.map((val,i)=><Link key={i} to={`/pokemon/${val.name}`}>
          <div className='rounded-lg m-1 bg-violet-900 flex cursor-pointer items-center justify-center flex-col' key={val.name}>
            <Image clas={"hover:scale-110 transition duration-150 w-[100px]"} preCharge={"w-[100px] h-[80px] bg-gray-500"} alt={val.name} url={val.image}/> 
            <span className='text-white font-semibold hover:text-gray-500 transition duration-150'>{firstLeterUP(val.name).replace("-"," ")}</span>
          </div>   
        </Link>)}
    </div>
  )
}

export default ListContainer