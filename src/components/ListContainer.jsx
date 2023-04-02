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
    <div className={`pokemonContainer ${pokeData.length>10?" h-[500px] md:h-[300px]":""}`}>
      <div className='w-[150px] h-[130px] flex items-center  justify-center text-center'>
        <h3 className='font-bold text-white '>Resultados de busqueda</h3>
      </div>
      {pokeData.map((val,i)=><Link key={i} to={`/pokemon/${val.name}`}>
          <div className='itemPokemonContain' key={val.name}>
            <Image clas={"hover:scale-110 transition duration-150 w-[100px]"} preCharge={"w-[100px] h-[80px] bg-gray-500"} alt={val.name} url={val.image}/> 
            <span>{firstLeterUP(val.name).replace("-"," ")+` #${val.id}`}</span>
          </div>   
        </Link>)}
    </div>
  )
}

export default ListContainer