function PokemonCard(props) {
  const {pokemon} = props;

  console.log(pokemon);

  if (pokemon && pokemon.imgSrc) {
    return (
      <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  } else {
    return (
      <figure>
        <p>???</p>
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
}

export default PokemonCard;
