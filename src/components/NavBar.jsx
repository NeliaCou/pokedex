import PropTypes from "prop-types";

function NavBar({ pokemonList, handleClick }) {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.id} onClick={() => handleClick(pokemon)}>
          {pokemon.name}
        </button>
      ))}
    </>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.array.isRequired,
  selectedPokemonId: PropTypes.string,
  setPokemonId: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavBar;
