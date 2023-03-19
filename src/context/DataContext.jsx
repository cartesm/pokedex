import React,{createContext,useEffect,useState} from 'react'

export let dataContext= createContext();

function DataContext(props) {
  
    /**--------------------------------------------- */
    async function getPokemon(id){
        try{
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await result.json();
             /* -- */
            const image = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`);
            return {...data,image}
        }catch(err){console.error("error catch: "+err)}
    }
    /**--------------------------------------------- */
    const firstLeterUP= (word)=>{return word.charAt(0).toUpperCase()+word.slice(1)}
    /**--------------------------------------------- */
    async function getNames(setNames){
        try{
            const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            const data = await result.json();
            const names = await data.results.map(dt=>dt.name.replace("-"," "));
            setNames(names);
        }catch(err){console.error("error cathc names: "+err);}
    }
    /**--------------------------------------------- */
    const getValuesEsp= async (url)=>{
        try{
            const resp = await fetch(url);
            const result = await resp.json();
            const description = await result.flavor_text_entries.find(valor => valor.language.name ==="es").flavor_text;
            const name= await result.names.find(valor => valor.language.name==="es").name
            return {name,description}
        }catch(e){console.error("error Esp: "+e);}
    }
    /**-------------------------------------------------- */
    const getAttacks = async(url)=>{
        try{
            const resp = await fetch(url);
            const result = await resp.json();
            const description = await result.flavor_text_entries.find(valor => valor.language.name==="es").flavor_text;
            const name= await result.names.find(valor => valor.language.name==="es").name;
             return {name,description,power:result.power,accuracy:result.accuracy,class:result.damage_class.name}
        }catch(e){console.error("error attacks: "+e);}
    }
    
  
    return <dataContext.Provider value={{
        getPokemon,
        firstLeterUP,
        getNames,
        getValuesEsp,
        getAttacks
    }} >{props.children}</dataContext.Provider>
}

export default DataContext