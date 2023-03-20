import React,{useState,useEffect,useContext} from 'react';
import {dataContext} from "../context/DataContext"
import {Header,Searcher,Footer,Aside,Image} from "../components/index"
import { useParams } from 'react-router-dom';
function Pokmon() {
    
    const {getPokemon,firstLeterUP,getValuesEsp,getAttacks} = useContext(dataContext);

    const {id} = useParams();
    const [pokeData, setPokeData] = useState({abilities: [],moves:[],types:[],name:"",image:"",sprites:{},stats:[],});
    const [abilities, setAbilities] = useState([]);
    const [mobments, setMobments] = useState([{name:"",description:"",power:0,accuracy:0,class:""}])
    const [mobmentsRendered, setMobmentsRendered] = useState([{}]);
    const [selected, setSelected] = useState("");

    const [charge, setCharge] = useState(true)
    const [secondCharge, setSecondCharge] = useState(true)
    let maxValues = [714,526,658,535,658,548];

    
    /**Funciones para filtros de mobimientos */
    const allFilter=()=>{
      setSelected("all")
      setMobmentsRendered(mobments);
    };
    const filterMobments = (clase)=>{
      setSelected(clase)
      const dataFiltered= mobments.filter(actual=> actual?actual.class ===clase:"")  
      setMobmentsRendered(dataFiltered);
    };

    useEffect(()=>{
      const setData=()=>{
        getPokemon(id).then(valor=>{setPokeData(valor)});
        setCharge(false)
  
      }; charge?setData():""
      /**funcion que toma los datos en español */
      const getEsp= ()=>{
        pokeData.abilities.map(abilidad=>{
          getValuesEsp(abilidad.ability.url)
          .then(valor=>setAbilities(actual=>[...actual,valor]))
        })
    }; getEsp();
      /**funcion para tomar los mobimientos,y sus datos en español */
      const getMoves= ()=>{
        pokeData.moves.map((move,i)=>{
          getAttacks(move.move.url)
          .then(valor=>setMobments(actual=>[...actual,valor]));
          i===pokeData.moves.length-1? setSecondCharge(false):"";
        })
      };getMoves();

      
      document.title= firstLeterUP(pokeData.name)
    },[pokeData]);
    useEffect(() => {
      allFilter()
    }, [mobments]);
    
    return (
    <main className='bg-image-1'>
      <Header/>
      <div className='flex justify-evenly gap-2'>
      <section className='md:w-auto w-full  lg:w-2/3 mx-auto lg:m-0 lg:relative lg:ml-20 bg-black bg-opacity-30  '>
        <div className='grid grid-cols-1  place-items-center '>
          <div className='py-4 text-center'>
            <h3 className='text-4xl text-white text-opacity-80 font-black'>{secondCharge?"Cargando nombre...": firstLeterUP(pokeData.name.replace("-"," "))}</h3>
            <span className='text-xl text-white text-opacity-60 font-semibold'>{secondCharge?"Cargando..": "#"+pokeData.id}</span>
            <div className='text-center'>
              {pokeData.types.map((type,id)=><span className={`type ${type.type.name}`} key={id}>{firstLeterUP(type.type.name)}</span>)}
            </div>
          </div>
          <Image preCharge={"w-[300px] h-[300px] bg-gray-500 rounded-lg bg-opacity-40"} url={pokeData.image.url} alt={pokeData.name} clas={"w-[300px] mb-[100px] md:mb-[20px]"} />
      </div>
        {/* estadisticas */}
        <div className='grid grid-cols-1 place-items-center py-4 bg-white bg-opacity-80 rounded-2xl w-[400px] md:w-[450px] mx-auto ' >
          <h3 className='text-3xl font-bold my-2'>Estadisticas (Base)</h3>
            <div>
              {secondCharge?<span className='loader my-6'></span> :pokeData.stats.map((vl,i)=>
                <label htmlFor="" className='grid grid-cols-2 ' key={i}>                        
                    <span className='font-semibold text-base ' >{firstLeterUP(vl.stat.name)}</span>
                      <div className='flex items-center justify-end'>
                        <progress value={vl.base_stat*2.8} max={maxValues[i]}></progress>
                        <span className='absolute pr-3 font-mono text-blue-900'>{vl.base_stat}</span>
                     </div>                       
                </label>)}       
            </div>
        </div>
        {/* abilidades */}
       <div className=' text-center bg-white bg-opacity-80 rounded-xl w-[400px] mx-auto my-5 p-3'>
        <h3 className='mx-auto font-bold text-3xl '>Habilidades</h3>
        {!secondCharge? abilities.map((abilidad,id)=><div key={id}>
          <span className='block font-semibold text-lg text-sky-600 pt-2'>{abilidad.name}</span>
          <p>{abilidad.description}</p>
        </div>):<span className='loader my-3'></span>}
       </div>
       {/* mobimientos/ataques */}
       <h3  className='text-center text-white font-black text-3xl pt-12 pb-6'>Mobimientos que {firstLeterUP(pokeData.name)} <br /> puede aprender</h3>
        <div className='text-center py-4'>
          <button onClick={allFilter} className={selected=="all"?"button-filter-selected":"button-filter "}>Todos</button>
          <button onClick={()=>{filterMobments("physical")}} className={selected=="physical"?"button-filter-selected":"button-filter "}>Fisico</button>
          <button onClick={()=>{filterMobments("special")}} className={selected=="special"?"button-filter-selected":"button-filter "}>Especial</button>
          <button onClick={()=>{filterMobments("status")}} className={selected=="status"?"button-filter-selected":"button-filter "}>Estado</button>
        </div>
        {/* tabla mobimientos */}
        <div className='text-center bg-gray-900 text-white w-auto mx-6 md:w-[600px] md:mx-auto rounded-xl mb-6 overflow-hidden'>
          <div className='grid grid-cols-3 font-bold text-lg py-3 bg-gray-600'>
            <span>Nombre</span>
            <span>Potencia</span>
            <span>Precisión</span>
          </div>
          <div className='overflow-y-auto h-[500px] md:h-[300px] scrollbar-01 pl-3 bg-gray-600'>
            {/* implementacion de loader */}
            {secondCharge? <span className='loader mx-auto  relative top-[50%]'></span>
            : mobmentsRendered?mobmentsRendered.slice(0,99).map((attack,id)=>attack.description? <div className={`grid py-2 ${id%2===0?"bg-gray-900":"bg-slate-800"}`} key={id}>
              <div className='grid grid-cols-3'>
                <span className='font-semibold'>{!attack.name?"name":attack.name}</span>
                <span>{attack.power?attack.power:"---"}</span>
                <span>{attack.accuracy?attack.accuracy:"---"}</span>
              </div>
              <p className='text-start pl-6 text-sky-600'>{ attack.description}</p>
            </div>:"")
            :undefined}
          </div>
          <div className='text-sky-600 py-4 bg-gray-600'></div>
        </div>
      </section>
      <section className='md:flex flex-col gap-3 w-auto hidden '>
        <Aside estilos={"bg-gray-600 w-[300px] rounded-lg  bg-opacity-80 "} >
          <Searcher/>
        </Aside>
      </section>
      </div>
      <Footer/>
    </main>
  ) 
}



export default Pokmon