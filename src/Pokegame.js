// Modify your component hierarchy so that ***App*** renders a component called ***Pokegame***. 
// ***Pokegame*** should take your list of 8 pokemon and randomly assign them into two hands of 4 cards each. 
// It should then render two ***Pokedex*** components, one for each hand.
// Once you’ve got this working, modify your ***Pokegame*** so that it also calculates the total experience for each hand of pokemon. 
// It should pass this total to the ***Pokedex***. Next, have the ***Pokegame*** component determine which hand is the “winner,” 
// where the winning hand is the one with the higher total experience. Then modify the ***Pokedex*** component one more time 
// so that it accepts a prop of ***isWinner***. If the ***Pokedex*** is the winning one, 
// it should display the message “THIS HAND WINS!” at the bottom of the deck.

import React from 'react';
import Pokedex from './Pokedex';

function getTotalExp(hand) {
  return hand.reduce((total, pokemon) => total + pokemon.base_experience, 0);
}
// Randomly assign pokemon into 2 hands
function Pokegame(props) {
  const { pokemon } = props;
  const shuffledPokemon = pokemon.sort(() => Math.random() - 0.5);
  let hand1 = shuffledPokemon.slice(0,4);
  let hand2 = shuffledPokemon.slice(4);

  let totalExpHand1 = getTotalExp(hand1);
  let totalExpHand2 = getTotalExp(hand2);

  const winningHand = totalExpHand1 > totalExpHand2 ? 1 : 2;

  return (
    <div>
      <Pokedex pokemon={hand1} totalExp={totalExpHand1} isWinner={winningHand === 1} />
      <Pokedex pokemon={hand2} totalExp={totalExpHand2} isWinner={winningHand === 2}/>
    </div>
  );
}

Pokegame.defaultprops = {
  pokemon: [
  {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
  {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
  {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
  {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
  {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
  {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
  {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
  {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]
};

export default Pokegame;