import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../Components/MOCK_DATA";
import PokemonList from "../Components/PokemonList";
import { useState } from "react";
import pokeball from "../assets/pokeball.png";
const Dex = () => {
  const [pokemons, setPokemons] = useState(MOCK_DATA);
  const [createPokemon, setCreatePokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]); // 초기화 null로 설정
  const navigate = useNavigate();

  // 포켓몬 추가 함수
  const CreatedPokemon = (pokemon) => {
    const newCreatePokemon = [...createPokemon];
    for (let i = 0; i < newCreatePokemon.length; i++) {
      if (newCreatePokemon[i] === null) {
        // null인 자리에 포켓몬 추가
        newCreatePokemon[i] = pokemon;
        setCreatePokemon(newCreatePokemon);
        return;
      }
    }
    alert("최대 6마리까지 잡을 수 있습니다!"); // 포켓몬이 6마리 넘을 때
  };

  // 포켓몬 삭제 함수
  const removedPokemon = (index) => {
    const newCreatePokemon = [...createPokemon];
    newCreatePokemon[index] = null; // 해당 자리를 null로 비움
    setCreatePokemon(newCreatePokemon);
  };

  return (
    <div>
      <NavBox>
        <NavBox1>나만의 포켓몬</NavBox1>
        <NavBox2>
          {createPokemon.map((poke, index) => (
            <NavBox3 key={index}>
              {poke ? ( // 포켓몬이 있으면 보여주고, 없으면 빈 슬롯
                <NavPokemonCardImg>
                  <img src={poke.img_url} alt={poke.korean_name} />
                  <NavpokemonCardImgMargin>
                    {poke.korean_name}
                  </NavpokemonCardImgMargin>
                  <NavpokemonCardImgMargin>{poke.id}</NavpokemonCardImgMargin>
                  <NavpokemonCardImgMargin>
                    {poke.types.join(", ")}
                  </NavpokemonCardImgMargin>
                  <button onClick={() => removedPokemon(index)}>삭제</button>
                </NavPokemonCardImg>
              ) : (
                <>
                  <NavPokeballImg src={pokeball} alt="몬스터볼" />
                </>
              )}
            </NavBox3>
          ))}
        </NavBox2>
      </NavBox>
      <MainBox>
        <PokemonList CreatedPokemon={CreatedPokemon} pokemons={pokemons} />
      </MainBox>
      <button onClick={() => navigate("/")}>home으로 돌아가기</button>
      <button onClick={() => navigate("/detail")}>디테일 카드로 이동</button>
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

const NavPokeballImg = styled.img`
  width: 80px;
  height: 60px;
`;
const NavpokemonCardImgMargin = styled.p`
  margin: 6px;
`;
const NavPokemonCardImg = styled.div`
  width: 210px;
  height: 200px;
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
const NavBox = styled.div`
  width: 1400px;
  height: 300px;
  border: 1px solid red;
  margin: 30px auto 30px auto;
  display: flex;
  flex-direction: column;
  background-color: #f0eeee;
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Dex;
