import React,{useContext,useEffect,useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {dataContext} from "../context/DataContext"
import { data } from 'autoprefixer';
function ListContainer() {

 
        const {dataSearch,firstLeterUP, } = useContext(dataContext);
  const [pokeData, setPokeData] = useState([])

  useEffect(() => {
    setPokeData([])
    setPokeData(dataSearch)
  })
  
  let history=useNavigate();
  function handleSubmit(e){
    !inputValue? console.error("null"):history(`/pokemon/${inputValue.replace(" ","-")}`)
  }


  return (
    <div className='mx-auto grid grid-cols-5 h-[300px] w-[850px] overflow-x-auto bg-[#191e29] p-2 m-2 rounded-lg'>
      {pokeData.map((val)=><Link to={`/pokemon/${val.name}`}>
          <div className='rounded-lg m-1 bg-violet-900 flex cursor-pointer items-center justify-center flex-col' key={val.name}> 
            <img className='hover:scale-110 transition duration-150' src={val.image} alt={val.name} />
            <span className='text-white font-semibold hover:text-[#191e29] transition duration-150'>{firstLeterUP(val.name).replace("-"," ")}</span>
          </div>   
        </Link>)}
    </div>
  )
}

export default ListContainer