import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const MainBox1 = styled.div`
  width: 210px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  overflow-wrap: break-word;
  align-items: center;
  justify-content: space-between;
`;
const PokemonList = ({ addPokemon, pokemons }) => {
  const navigate = useNavigate();
  return (
    <>
      {pokemons.map((pokemon) => {
        return (
          <MainBox1
            onClick={() => {
              navigate(`/detail?id=${pokemon.id}`);
            }}
            key={pokemon.id}
          >
            <PokemonCard addPokemon={addPokemon} pokemon={pokemon} />
          </MainBox1>
        );
      })}
    </>
  );
};

export default PokemonList;
