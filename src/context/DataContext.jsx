import React,{createContext,useEffect,useState} from 'react'

export let dataContext= createContext();

function DataContext(props) {
  

    useEffect(() => {
        getAllData();
    }, [])
    

    const [allData, setAllData] = useState([])




    const getAllData = async()=>{
        try{
            const names = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            const dataNames = await names.json();
            dataNames.results.map( async(pokmon)=>{
                const resp=  await fetch(pokmon.url);
                const data = await resp.json();
                setAllData(actual=> [...actual,data])
            })
           
        }catch(e){console.error("error alldata: "+e);}
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
    async function getNames(){
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const data = await result.json();
        const names = await data.results.map(dt=>dt.name.replace("-"," "));
        return names;
    }
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
    
  
    return <dataContext.Provider value={{
        getPokemon,
        firstLeterUP,
        getNames,
        getValuesEsp,
        getAttacks,
        allData
    }} >{props.children}</dataContext.Provider>
}

export default DataContext