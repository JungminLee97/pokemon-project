const PokemonDetail = ({ pokemon }) => {
  return (
    <div>
      <h2>{pokemon.korean_name}</h2>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>{pokemon.types}</p>
      <p>{pokemon.description}</p>
    </div>
  );
};

export default PokemonDetail;
