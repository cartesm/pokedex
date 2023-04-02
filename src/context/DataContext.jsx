import React,{createContext,useEffect,useState} from 'react'

export let dataContext= createContext();

function DataContext(props) {
  
    const [dataSearch,setDatasearch] = useState([]);
    const [pokemonsCharged, setPokemonsCharged] = useState(50)
    const [namesUnfiltered, setnamesUnfiltered] = useState([{name:"",url:""}])
    const [dataCharged, setDataCharged] = useState([])

    const filterNames=(inputValue)=>{
        setDatasearch([ ])
        if(inputValue==="") setDatasearch([ ])
        else{
            const filterData= namesUnfiltered.filter((name)=>name.name.toLowerCase().includes(inputValue.toLowerCase()));
            filterData.map((data)=>{
                const exprecion = new RegExp("/([^/]+)/?$");
                const id =data.url.match(exprecion)
                const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[1]}.png`;
                setDatasearch(actual =>[...actual,{name:data.name,image,id:id[1]}])
            })
        }
       

    } 
    /**--------------------------------------------- */
    const getAllPokemons= async()=>{
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsCharged}&offset=0`);
        const result = await resp.json();

        result.results.map((val,i)=>{
            const exprecion = new RegExp("/([^/]+)/?$");
            const id =val.url.match(exprecion)
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id[1]}.png`;
            setDataCharged(actual =>[...actual,{name:val.name,image,id:id[1]}])
        })

    }
    /* ---------------------------------------------------- */
    const morePokemons=()=>{
        setPokemonsCharged(actual=>actual+50);
        getAllPokemons();
    }
    /**--------------------------------------------- */
     async function getNames(){
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await result.json();
        const names = await data.results;
        setnamesUnfiltered(names);
    }
    /**--------------------------------------------- */
    async function getPokemon(id){
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await result.json();
         /* -- */
        const image = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
        return {...data,image}
    }
    /**--------------------------------------------- */
    const firstLeterUP= (word)=>{return word.charAt(0).toUpperCase()+word.slice(1)}
   
    /**--------------------------------------------- */
    const getValuesEsp= async (url)=>{
        const resp = await fetch(url);
        const result = await resp.json();
        const description = await result.flavor_text_entries.find(valor => valor.language.name ==="es").flavor_text;
        const name= await result.names.find(valor => valor.language.name==="es").name
        return {name,description}
    }
    /**-------------------------------------------------- */
    const getAttacks = async(url)=>{
        const resp = await fetch(url);
        const result = await resp.json();
        const description = await result.flavor_text_entries.find(valor => valor.language.name==="es").flavor_text;
        const name= await result.names.find(valor => valor.language.name==="es").name;
        return {name,description,power:result.power,accuracy:result.accuracy,class:result.damage_class.name}
    }
    /**--------------------------------------------- */
    useEffect(() => {
        getAllPokemons();
        getNames();
    }, [])
   
    
  
    return <dataContext.Provider value={{
        getPokemon,
        firstLeterUP,
        filterNames,
        getValuesEsp,
        getAttacks,
        dataSearch,
        getAllPokemons,
        morePokemons,
        dataCharged
    }} >{props.children}</dataContext.Provider>
}

export default DataContext