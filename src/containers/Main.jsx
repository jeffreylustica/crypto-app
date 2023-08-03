import { Home } from "../components";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer } from "./index";

const Main = () => {
  const isHover = useSelector((state) => state.isHover.isHover);

  return (
    <div
      className={`${
        isHover
          ? "sm:ml-[var(--hovered-nav-width)]"
          : "sm:ml-[var(--initial-nav-width)]"
      } duration-300`}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      Main
      <Footer />
    </div>
  );
};

export default Main;
