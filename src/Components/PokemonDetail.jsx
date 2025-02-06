import styled from "styled-components";
const PokemonDetail = ({ pokemon }) => {
  return (
    <DetailPokemon>
      <Tag1>{pokemon.korean_name}</Tag1>
      <Tag2 src={pokemon.img_url} alt={pokemon.korean_name} />
      <Tag3>{pokemon.types}</Tag3>
      <Tag4>{pokemon.description}</Tag4>
    </DetailPokemon>
  );
};
const DetailPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Tag1 = styled.h2`
  margin: 2rem;
  font-size: 25px;
  font-weight: 600;
`;
const Tag2 = styled.img`
  margin: 2rem;
  width: 220px;
  height: 220px;
`;
const Tag3 = styled.p`
  margin: 2rem;
  font-size: 25px;
  font-weight: 549;
  color: #0d9220;
`;
const Tag4 = styled.p`
  margin: 2rem;
  font-size: 25px;
  font-weight: 600;
  color: #f50808f4;
`;
export default PokemonDetail;
