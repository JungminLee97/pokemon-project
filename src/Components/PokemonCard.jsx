import styled from "styled-components";
const ChangeTags = styled.p`
  margin: 8px;
`;
const ChangeDivTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChangeBtn = styled.button`
  margin: 8px;
`;
const PokemonCard = ({ CreatedPokemon, pokemon }) => {
  return (
    <ChangeDivTags>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <ChangeTags>{pokemon.korean_name}</ChangeTags>
      <ChangeTags>{pokemon.id}</ChangeTags>
      <ChangeTags>{pokemon.types.join(", ")}</ChangeTags>
      <ChangeBtn
        onClick={(e) => {
          e.stopPropagation();
          CreatedPokemon(pokemon);
        }}
      >
        추가
      </ChangeBtn>
    </ChangeDivTags>
  );
};
export default PokemonCard;
