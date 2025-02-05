import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
  const navigate = useNavigate();

  return (
    <HomePageBackGround>
      <NamePokemon>POCKETmon</NamePokemon>
      <PageMoveButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬도감으로 이동!
      </PageMoveButton>
    </HomePageBackGround>
  );
};
const HomePageBackGround = styled.div`
  background-color: #ffe5b7;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const NamePokemon = styled.h1`
  color: #fec301;
  border: 15px solid #fec301;
  border-radius: 20px;
  font-size: 150px;
  background-color: #2e57a7;
`;
const PageMoveButton = styled.button`
  background-color: #c40000;
  color: white;
`;
export default Home;
