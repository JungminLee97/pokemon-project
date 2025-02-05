import styled from "styled-components";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
