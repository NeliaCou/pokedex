function NavBar({ pokemonList, selectedPokemonId, setPokemonId }) {
  const handleClick = (pokemonId) => {
    setPokemonId(pokemonId);
  };
  return (
    <div>
      <nav>
        {pokemonList.map((pokemon) => (
          <button key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
            {pokemon.name}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default NavBar;