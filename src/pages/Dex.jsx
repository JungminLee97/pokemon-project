import { useLocation, useNavigate } from "react-router-dom";

const Dex = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      포켓몬 도감페이지에오신걸환영합니다.
      <div>현재페이지:{location.pathname.slice(1)}</div>
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
