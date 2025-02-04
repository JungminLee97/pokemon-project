import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>POCKETmon</h1>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬도감으로 이동!
      </button>
    </div>
  );
};

export default Home;
