import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { uuidGenerator } from "./components/UuidGenerator";

function App() {
  const [pokemonId, setPokemonId] = useState(null);

  const pokemonList = [
    {
      id: uuidGenerator,
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: uuidGenerator,
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: uuidGenerator,
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: uuidGenerator,
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: uuidGenerator,
      name: "mew",
    },
  ];

  const selectedPokemon = pokemonList.find(pokemon => pokemon.id === pokemonId);

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        selectedPokemonId={pokemonId}
        setPokemonId={setPokemonId}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;