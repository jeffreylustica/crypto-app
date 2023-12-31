import gemLogo from "../assets/gem-logo.svg";
import { NavLinks } from "../components/index";
import useHover from "../hooks/useHover";

const Navbar = () => {
  const [isHover, ref] = useHover();

  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow-[0_-10px_10px_-5px_rgba(0,0,0,0.1)] sm:shadow-[10px_0_10px_-5px_rgba(0,0,0,0.1)] fixed h-[var(--mobile-nav-height)] left-0 max-sm:right-0 bottom-0 sm:top-0 sm:h-screen sm:flex sm:flex-col duration-300 ${
        isHover
          ? "sm:w-[var(--hovered-nav-width)]"
          : "sm:w-[var(--initial-nav-width)]"
      }`}
      ref={ref}
    >
      <div className="hidden mt-4 mb-16 sm:flex sm:items-center">
        <img
          src={gemLogo}
          alt="crypto app logo"
          className="sm:ml-4 w-[40px] h-[46px]"
        />
        <h1
          className={`${
            isHover ? "flex" : "hidden"
          } ml-4 text-xl font-bold whitespace-nowrap`}
        >
          Digital Gems
        </h1>
      </div>
      <NavLinks isHover={isHover} />
    </div>
  );
};

export default Navbar;
