import { useSelector } from "react-redux";

const Main = ({ children }) => {
  const isHover = useSelector((state) => state.isHover.isHover);

  return (
    <div
      className={`${
        isHover
          ? "sm:ml-[var(--hovered-nav-width)]"
          : "sm:ml-[var(--initial-nav-width)]"
      } duration-300`}
    >
      {children}
    </div>
  );
};

export default Main;
