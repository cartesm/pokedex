import { useContext,useEffect,useState } from "react"
import {Searcher,Header,Footer,ListContainer,Image} from "../components/index"
import {dataContext} from "../context/DataContext"
useEffect
function Home() {

  const {getAllPokemons,morePokemons,dataCharged,firstLeterUP} = useContext(dataContext);
  const [dataPokemon, setDataPokemon] = useState([]);
  useEffect(() => {

    setDataPokemon(dataCharged)
    console.log(dataCharged);
    document.title="Simple pokedex";
  }, [morePokemons])
  

  return <main className='bg-[#696e79] h-screen '>
    <Header />
    <Searcher/>
    <ListContainer/>
    <div className="pokemonContainer h-[300px]">
        {dataPokemon.map((val,i)=><div key={i} className={`itemPokemonContain `}>
            <Image clas={"hover:scale-110 transition duration-150 w-[100px]"} preCharge={"w-[100px] h-[80px] bg-gray-500"} alt={val.name} url={val.image}/> 
            <span>{firstLeterUP(val.name).replace("-"," ") + ` #${val.id}`}</span>
        </div>)}
        <button className="bg-rose-600" onClick={morePokemons}>Cargar mas</button>
    </div>
    <Footer />
  </main>
}

export default Home
