import { useSelector } from "react-redux";

const Main = ({ children }) => {
  const isHover = useSelector((state) => state.isHover.isHover);

  return (
    <div
      className={`${
        isHover
          ? "sm:ml-[var(--hovered-nav-width)]"
          : "sm:ml-[var(--initial-nav-width)]"
      } duration-300 bg-gray-50 dark:bg-text-primary-dark-900 min-h-screen`}
    >
      {children}
    </div>
  );
};

export default Main;
