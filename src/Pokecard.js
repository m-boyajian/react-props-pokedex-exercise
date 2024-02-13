// Shows a single Pokemon, with their name, image, and type. 

import React from 'react';
import './Pokecard.css';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/tree/master/sprites/pokemon";


function Pokecard(props) {
  let pokeImg = `${POKE_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className="name"> {props.name} </div>
      <img className="image" src={pokeImg} />
      <div className="type">Type: {props.type} </div>
      <div className="experience">Experience: {props.experience} </div>
    </div>
  );
}

export default Pokecard;