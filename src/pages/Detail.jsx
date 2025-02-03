import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        도감으로다시이동
      </button>
    </>
  );
};

export default Detail;
