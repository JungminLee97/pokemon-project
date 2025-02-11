import styled from "styled-components";
import MOCK_DATA from "../Components/MOCK_DATA";
import PokemonList from "../Components/PokemonList";
import { useState } from "react";
import Dashboard from "../Components/Dashboard";
import { Toaster, toast } from "react-hot-toast";
import { PokemonContext } from "../context/PokemonContext";
import { useEffect } from "react";
const Dex = () => {
  const [pokemons, setPokemons] = useState(() => {
    try {
      const localGetDatas = localStorage.getItem("pokemons");
      return localGetDatas ? JSON.parse(localGetDatas) : MOCK_DATA;
    } catch (error) {
      console.error("localStorage 파싱 오류:", error);
      return MOCK_DATA;
    }
  });

  const [createPokemon, setCreatePokemon] = useState(() => {
    const localGetData = localStorage.getItem("createPokemon");
    return localGetData
      ? JSON.parse(localGetData)
      : [null, null, null, null, null, null];
  });

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
    localStorage.setItem("createPokemon", JSON.stringify(createPokemon));
  }, [pokemons, createPokemon]);

  const addPokemon = (pokemon) => {
    if (
      createPokemon.find((poke) => {
        return poke && poke.id === pokemon.id;
      })
    ) {
      toast("다른 포켓몬도 잡아봐", { type: "warning", duration: 3000 });
      return;
    }
    const newCreatePokemon = [...createPokemon];
    for (let i = 0; i < newCreatePokemon.length; i++) {
      if (newCreatePokemon[i] === null) {
        // null인 자리에 포켓몬 추가
        newCreatePokemon[i] = pokemon;
        setCreatePokemon(newCreatePokemon);
        return;
      }
    }

    toast("6마리 포켓몬이 최대야", { type: "warning", duration: 3000 });
  };

  const removedPokemon = (index) => {
    const newCreatePokemon = [...createPokemon];
    newCreatePokemon[index] = null; // 해당 자리를 null로 비움
    setCreatePokemon(newCreatePokemon);
  };

  return (
    <div>
      <Toaster position="top-center" />
      <PokemonContext.Provider value={{ addPokemon, removedPokemon, pokemons }}>
        <Dashboard createPokemon={createPokemon}></Dashboard>
        <MainBox>
          <PokemonList />
        </MainBox>
      </PokemonContext.Provider>
    </div>
  );
};

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

export default Dex;
