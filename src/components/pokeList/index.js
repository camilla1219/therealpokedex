import React, { useState, useEffect } from "react";
import PokeCell from "../PokeCell";
import './PokeList.css';

const PokeList = ({ handleOnClick }) =>  {
    const [pokemon, setPokemon] =useState([]) 

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await response.json()
            const pokemonList = data.results.slice(0, data.results.length).map(items => items).flat()
            setPokemon(pokemonList)
    }
    fetchData()
},[])

    return (
        <section className="poke-list">
            {pokemon.map((pokeClass, id) => {
                return (
                    <PokeCell key={id} pokeClass={id} handleOnClick={handleOnClick} />
                )
            })}
           

        </section>

    )
}
export default PokeList