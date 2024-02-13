// Is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.

import React from react;
import Pokecard from "./Pokecard";
import './Pokedex.css';

function Pokedex(props) {
  // Bringing in pokemon, totalExp, & isWinner from Pokegame
  const {pokemon, totalExp, isWinner} = props;

  return (
    <div className="Pokedex">
      {pokemon.map(pokemon => (
        <Pokecard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          experience={pokemon.base_experience}
        />
      ))}
      {isWinner && <div className="winner-message">THIS HAND WINS!</div>}
    </div>
  );
}

export default Pokedex;