import styled from "styled-components";
import PokemonCard from "./PokemonCard";
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
  `;
const PokemonList = ({ pokemons }) => {
  
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <MainBox1 key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </MainBox1>
        );
      })}
    </div>
  );
};

export default PokemonList;
