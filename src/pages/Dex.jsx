import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../Components/MOCK_DATA";
import PokemonList from "../Components/PokemonList";
import { useState } from "react";

const Dex = () => {
  const [pokemons, setPokemons] = useState(MOCK_DATA);
  const navigate = useNavigate();

  return (
    <div>
      <NavBox>
        <NavBox1>나만의포켓몬</NavBox1>
        <NavBox2>
          <NavBox3 />
          <NavBox3 />
          <NavBox3 />
          <NavBox3 />
          <NavBox3 />
          <NavBox3 />
        </NavBox2>
      </NavBox>
      <MainBox>
        <PokemonList pokemons={pokemons} />
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
const MainBox1 = styled.div`
  width: 210px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

export default Dex;
