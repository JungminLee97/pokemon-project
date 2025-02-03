import Home from "../pages/Home";
import Dex from "../pages/Dex";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* {Route} */}
        <Route path="/" element={<Home />} />
        <Route path="/dex" element={<Dex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
