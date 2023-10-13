import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonId }) {
  const handleClick = (pokemon) => {
    setPokemonId(pokemon.id);
    if (pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

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
