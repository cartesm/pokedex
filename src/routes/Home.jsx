import { useContext,useEffect,useState } from "react"
import {Searcher,Header,Footer,ListContainer,Image} from "../components/index"
import { Link } from "react-router-dom"
import {dataContext} from "../context/DataContext"
useEffect
function Home() {

  const {getAllPokemons,morePokemons,dataCharged,firstLeterUP} = useContext(dataContext);
  const [dataPokemon, setDataPokemon] = useState([]);
  useEffect(() => {
    setDataPokemon(dataCharged)
    document.title="Simple pokedex";
  }, [morePokemons])
  

  return <main className='bg-gray-500 max-w-[1920px]'>
    <Header />
    <Searcher/>
    <ListContainer/>
    <div className="grid my-10 place-items-center ">
      <div className="pokemonContainer scrollbar-02 h-[300px]">
        {dataPokemon.map((val,i)=><div key={i} className={`itemPokemonContain bg-violet-900`}>
            <Link to={`/pokemon/${val.name}`}>
              <Image clas={"hover:scale-110 transition duration-150 w-[100px]"} preCharge={"w-[100px] h-[80px] bg-gray-500"} alt={val.name} url={val.image}/> 
              <span>{firstLeterUP(val.name).replace(/-/g," ") + ` #${val.id}`}</span>
            </Link>
        </div>)}
      </div>
        <button className="bg-purple-700 my-3 rounded-md text-white  w-32 h-8" onClick={morePokemons}>Cargar mas</button>
    </div>
    <Footer />
  </main>
}

export default Home
