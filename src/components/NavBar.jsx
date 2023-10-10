function NavBar({ pokemonIndex, pokemonCount, handleClick, handleClickBis }) {
  return (
    <nav>
      <button onClick={handleClickBis} disabled={pokemonIndex === 0}>
        Précédent
      </button>
      <button
        onClick={handleClick}
        disabled={pokemonIndex === pokemonCount - 1}
      >
        Suivant
      </button>
    </nav>
  );
}

export default NavBar;
