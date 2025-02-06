import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonDetail from "../Components/PokemonDetail";
import MOCK_DATA from "../Components/MOCK_DATA";
const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pokemonId = Number(searchParams.get("id"));
  const pokemon = MOCK_DATA.find((poke) => {
    return poke.id === pokemonId;
  });
  return (
    <>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감으로다시이동
      </button>
      <PokemonDetail pokemon={pokemon} />
    </>
  );
};

export default Detail;
