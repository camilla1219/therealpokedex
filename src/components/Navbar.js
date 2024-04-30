import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                Pokedex
            </div>
            <ul className='navbar-menu'>
                <li><Link to="/">PokeList</Link></li>
                <li> <Link to="/about">About</Link></li>
            </ul>
        </div>
    )
}
export default Navbar