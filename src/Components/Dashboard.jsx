import styled from "styled-components";
import pokeball from "../assets/pokeball.png";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { useContext } from "react";
const Dashboard = ({ createPokemon }) => {
  const navigate = useNavigate();
  const { removedPokemon } = useContext(PokemonContext);

  return (
    <>
      <NavBox>
        <NavBox1>
          나만의 포켓몬
          <BackToHomeBtn onClick={() => navigate("/")}>Home</BackToHomeBtn>
        </NavBox1>
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
    </>
  );
};
const BackToHomeBtn = styled.button`
  background-color: #fec301;
  color: red;
  font-weight: bold;
`;
const NavPokeballImg = styled.img`
  width: 80px;
  height: 60px;
`;
const NavpokemonCardImgMargin = styled.p`
  margin: 6px;
`;
const NavPokemonCardImg = styled.div`
  width: 190px;
  height: 240px;
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
  height: auto;
  min-height: 300px;
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
  align-content: flex-start;
  font-size: 30px;
  color: red;
  font-weight: 600;
`;
const NavBox2 = styled.div`
  width: 1400px;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const NavBox3 = styled.div`
  width: auto;
  height: auto;
  min-width: 120px;
  min-height: 120px;
  border: 1px dashed black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Dashboard;
