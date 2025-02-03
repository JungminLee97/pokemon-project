import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬도감 시작하기기
      </button>
    </div>
  );
};

export default Home;
