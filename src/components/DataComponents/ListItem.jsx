import React from 'react'
import { Link } from 'react-router-dom'
import {Image} from "../index"
function ListItem({image,name}) {
  return (
    <div className='bg-[#2a2356] w-[150px] text-center rounded-lg flex flex-col items-center justify-center m-1'>
        <Link to={`/pokemon/${name}`}>
          <Image preCharge={"bg-gray-300 bg-opacity-70 rounded-md w-[100px]"} clas={"w-[100px]"} url={image} alt={name}/>
          <span className='text-white font-bold'>{name}</span>
       </Link>
    </div>
  )
}

export default ListItem