import styled from "styled-components";
const ChangeTags = styled.p`
  margin: 10px;
`;
const ChangeDivTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokemonCard = ({ pokemon }) => {
  return (
    <ChangeDivTags>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />

      <ChangeTags>{pokemon.korean_name}</ChangeTags>
      <ChangeTags>{pokemon.id}</ChangeTags>
      <ChangeTags>{pokemon.types.join(", ")}</ChangeTags>
      <button
        style={{
          margin: 8,
        }}
      >
        추가
      </button>
    </ChangeDivTags>
  );
};
export default PokemonCard;
