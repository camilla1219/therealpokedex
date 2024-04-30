import React, {useState, useEffect} from "react";
import './PokeListDisplay.css'
import PokeListDisplayCell from "../PokeListDisplayCell";

const PokeListDisplay = () => {
    const [pokemon, setPokemon] =useState([])
    useEffect(() => {
        const fetchdata= async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data= await response.json()
            const pokemonList =data.results.slice(0,data.results.length).map(items => items).flat()
            setPokemon(pokemonList)
        }
        fetchdata()
    }, [])

    return (
        <section className="poke-list-display">
            {pokemon.map((pokeClass, id) => {
                return (
                    <PokeListDisplayCell key={id} pokeClass={id} />
                )
            })}

        </section>
    )
}
export default PokeListDisplay