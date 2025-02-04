const PokemonCard = ({ pokemon }) => {
  return (
    <div>
      <img src="{pokemon.img_url}" alt="{pokemon.korean_name}" />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.id}</p>
      <p>{pokemon.types.join(", ")}</p>
      <button>추가</button>
    </div>
  );
};
export default PokemonCard;
