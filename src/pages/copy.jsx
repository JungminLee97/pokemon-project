import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../Components/MOCK_DATA";
import PokemonList from "../Components/PokemonList";
import { useState } from "react";
const Dex = () => {
  const [pokemons, setPokemons] = useState(MOCK_DATA);
  const [createPokemon, setCreatePokemon] = useState(["", "", "", "", "", ""]);
  const navigate = useNavigate();

  const CreatedPokemon = (pokemon) => {
    const newCreatePokemon = [...createPokemon];
    for (let i = 0; i <= newCreatePokemon.length; i++) {
      if (newCreatePokemon[i] === "") {
        newCreatePokemon[i] = pokemon;
        setCreatePokemon(newCreatePokemon);
        return;
      }
    }

    if (createPokemon.length > 5) {
      alert("최대 6마리까지 잡을수있습니다!");
      return;
    }
    // if (!createPokemon.find((p) => p.id === pokemon.id)) {
    //   setCreatePokemon((prev) => [...prev, pokemon]);
    // }
  };
  const removedPokemon = (id) => {
    setCreatePokemon(
      createPokemon.filter((p) => {
        return p.id !== id;
      })
    );
  };
  return (
    <div>
      <NavBox>
        <NavBox1>나만의포켓몬</NavBox1>
        <NavBox2>
          {createPokemon.map((poke) => (
            <NavBox3 key={poke.id}>
              <img src={poke.img_url} alt={poke.korean_name} />
              <button
                onClick={() => {
                  removedPokemon(poke.id);
                }}
              >
                삭제
              </button>
              ;
            </NavBox3>
          ))}
        </NavBox2>
      </NavBox>
      <MainBox>
        <PokemonList CreatedPokemon={CreatedPokemon} pokemons={pokemons} />
      </MainBox>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home으로돌아가는버튼입니다
      </button>
      <button
        onClick={() => {
          navigate("/detail");
        }}
      >
        디테일카드로이동
      </button>
    </div>
  );
};

const NavBox = styled.div`
  width: 1400px;
  height: 300px;
  border: 1px solid red;
  margin: 30px auto 30px auto;
  display: flex;
  flex-direction: column;
  background-color: #f0eeee;
`;
const MainBox = styled.div`
  width: 1400px;
  height: 300vh;
  border: 1px solid red;
  background-color: #f0eeee;
  margin: 30px auto 30px auto;
  display: flex;
  overflow: auto;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`;
const NavBox1 = styled.div`
  width: 1400px;
  height: 100px;
  text-align: center;
  align-content: flex-end;
  font-size: large;
  color: red;
  font-weight: 600;
`;
const NavBox2 = styled.div`
  width: 1400px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const NavBox3 = styled.div`
  width: 120px;
  height: 120px;
  border: 1px dashed black;
  background-color: white;
`;

export default Dex;
