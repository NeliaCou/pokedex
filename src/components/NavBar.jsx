import PropTypes from "prop-types";

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

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  selectedPokemonId: PropTypes.string,
  setPokemonId: PropTypes.func.isRequired,
};

export default NavBar;