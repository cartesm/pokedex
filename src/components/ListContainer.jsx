import React,{useContext,useEffect,useState} from 'react'
import {Image} from "./index"
import { Link} from 'react-router-dom'
import {dataContext} from "../context/DataContext"
function ListContainer({ancho}) {

 
  const {dataSearch,firstLeterUP, } = useContext(dataContext);
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    setPokeData(dataSearch)
  })
  
  if(pokeData.length===0&&!pokeData.input) return <div className='bg-[#191e29] w-[300px] mx-auto my-8 p-2 rounded-lg text-center text-white font-semibold '>Los resultados se mostraran aqui</div>;
  return (
    <div className={`mx-3 md:mx-auto grid  ${!ancho? "grid-cols-3 md:grid-cols-5 lg:w-[850px] md:w-[700px]":ancho}  overflow-x-auto bg-[#191e29] p-2 rounded-lg scrollbar-03 my-3 ${pokeData.length>10?" h-[500px] md:h-[300px]":""}`}>
      <div className='w-[150px] h-[130px] grid place-content-center text-center'>
        <h3 className='font-bold text-white '>Resultados de busqueda</h3>
      </div>
      {pokeData.map((val,i)=><Link key={i} to={`/pokemon/${val.name}`}>
          <div className='itemPokemonContain bg-blue-900 ' key={val.name}>
            <Image clas={"hover:scale-110 transition duration-150 w-[100px]"} preCharge={"w-[100px] h-[80px] bg-gray-500"} alt={val.name} url={val.image}/> 
            <span>{firstLeterUP(val.name).replace(/-/g," ").replace("cap","")+` ${val.id>10000?"":"#"+val.id}`}</span>
          </div>   
        </Link>)}
    </div>
  )
}

export default ListContainer