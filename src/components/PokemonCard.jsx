import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
  console.log(pokemon.name);

  if (pokemon.name && pokemon.imgSrc) {
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

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
}

export default PokemonCard;

//Définir le type des props : dans ton composant PokemonCard, 
// utilise le package prop-types pour définir le type des props. 
// Tu dois fournir une définition complète de la forme pour la prop pokemon.

// Pour rappel, pokemon est un objet avec la forme suivante :

// {
//   name: "...",
//   imgSrc: "...",
// }
// Son "prop type" est donc une shape (le type pour les objets), avec une propriété name (requise) 
// et une propriété imgSrc (optionnelle).