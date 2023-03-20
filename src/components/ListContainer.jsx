import React,{useContext,useEffect,useState} from 'react'
import {ListItem} from "./index"
import {dataContext} from "../context/DataContext"
function ListContainer() {

    const {allData, firstLeterUP} = useContext(dataContext);


  const [dataCard, setDataCard] = useState([])

  useEffect(() => {
    setDataCard(allData)
  }, [])
  


  return (
    <div className='mx-auto grid grid-cols-5 h-[300px] overflow-x-auto bg-[#191e29] p-2 m-2 rounded-lg'>
        {dataCard.map((data,i)=> <ListItem image={data.sprites.front_default} key={i} name={data.name}/>)}
    </div>
  )
}

export default ListContainer