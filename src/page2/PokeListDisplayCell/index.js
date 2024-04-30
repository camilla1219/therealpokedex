import React from "react";
import './PokeDisplayCell.css'

const PokeListDisplayCell = ({ pokeClass }) => {
    return (
        <button  className="poke-cell-display">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} alt={pokeClass}></img>
        </button>
    )
}
export default PokeListDisplayCell