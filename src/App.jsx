import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import uuidGenerator from "./components/IdGenerator";
import { useEffect } from "react";

const pokemonList = [
  {
    id: uuidGenerator(),
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: uuidGenerator(),
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: uuidGenerator(),
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: uuidGenerator(),
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: uuidGenerator(),
    name: "mew",
  },
];

function App() {
  const [pokemonId, setPokemonId] = useState(pokemonList[0].id);

  const handleClick = (id) => {
    setPokemonId(id);
  };

  let selectedPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId);

  useEffect(
    () =>  {
      alert("hello pokemon trainer :)")
    }, 
    []
    );

  return (
    <div>
      <NavBar
        pokemonList={pokemonList}
        selectedPokemonId={pokemonId}
        setPokemonId={setPokemonId}
        handleClick={handleClick}
      />
      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;
