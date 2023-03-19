import React,{useState,useEffect,useContext} from 'react'
import {dataContext} from '../../context/DataContext';
function Mobimientos({id}) {

  let {getDataPokemon} = useContext(dataContext);
  const [generalData, setGeneralData] = useState({name:"",moves:[{move:{name:"",url:""}}]})
  const [mobments, setMobments] = useState([{accuracy:0,name:"",type:{name:""},names:[{language:{name:"",},name:""}],power:0,flavor_text_entries:[{flavor_text: "",language:{ name: "",}}]}])
  const [desciptions, setdesciptions] = useState([])
  const [names, setnames] = useState([])
  useEffect(()=>{
    getDataPokemon(setGeneralData,id);

  },[])

  generalData.moves.map((dt,j)=>getDataMobments(dt.move.url,j));

  async function getDataMobments(url,j){
    try{
        const results = await fetch(url);
        const data = await results.json();
        mobments[j]= data;

        const dataDescriptions = data.flavor_text_entries.find(valor => valor.language.name===undefined?null:valor.language.name==="es");
        desciptions[j]=dataDescriptions.flavor_text;

        const namesEsp = data.names.find(valor => valor.language.name==="es")
        names[j]=namesEsp.name;
    }catch(err){console.error(err)}
  }


  return (
    <section className='py-6 px-2 text-slate-200 md:p-0 w-[600px] my-6 md:w-auto mx-auto'>
      <h3 className='font-black text-3xl text-center py-10 text-gray-200'>Mobimientos que {generalData.name.charAt(0).toUpperCase()+generalData.name.slice(1)} puede aprender.</h3>
      <div className='bg-gray-900 bg-opacity-90 w-auto md:w-[600px]  rounded-xl mx-auto text-center'>
      <div className='grid grid-cols-3 py-2'>
          <span className='block font-bold text-lg text-sky-600 '>Nombre</span>
          <span className='block font-bold text-lg text-sky-600 '>Potencia</span>
          <span className='block font-bold text-lg text-sky-600 '>Precision</span>
      </div>
      <div className='p-2 '>  
        {mobments.map((vl,i)=>
         <div className=' py-1' key={i}>
          
          <div className=' grid grid-cols-3  border-t-[1.5px] border-white border-opacity-10'>
            {names.map((dt,j)=>j===i?<span className='block ' key={j}>{dt}</span>:"")}
            <span className='block '>{!vl.power?"--":vl.power}</span>
            <span  className='block'>{!vl.accuracy?"none":`${vl.accuracy}%`}</span>
          </div>
          <div  className="">
           {desciptions.map((des,k)=> <span className='block font-sans text-sky-500 text-start pl-5 text-sm' key={k}>{i===k?des:""}</span>)}
          </div>
          
          </div> 
         
        )}

      </div>
 
       
       
    </div>
    </section>
  )
}



export default Mobimientos

