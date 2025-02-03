import { Link, useNavigate } from "react-router-dom";

const Dex = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home으로돌아가는버튼입니다
      </button>
    </div>
  );
};

export default Dex;
