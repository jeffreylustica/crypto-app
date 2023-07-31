import { useEffect, useRef } from "react";
import reactLogo from "../assets/react.svg";
import NavLinks from "../components/NavLinks";
import { useSelector, useDispatch } from "react-redux";
import { mouseEnter, mouseLeave } from "../features/isHoverSlice";

const Navbar = () => {
  const isHover = useSelector((state) => state.isHover.isHover);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.addEventListener("mouseenter", () => {
      dispatch(mouseEnter());
    });
    ref.current.addEventListener("mouseleave", () => {
      dispatch(mouseLeave());
    });
  }, [dispatch]);

  return (
    <div
      className={`bg-green-200 fixed h-20 left-0 max-sm:right-0 bottom-0 sm:top-0 sm:h-screen sm:flex sm:flex-col duration-300 ${
        isHover ? "sm:w-[250px]" : "sm:w-[70px]"
      }`}
      ref={ref}
    >
      <div className="hidden mt-4 mb-16 sm:flex sm:items-center">
        <img src={reactLogo} alt="crypto app logo" className="sm:ml-4" />
        <h1 className={`${isHover ? "flex" : "hidden"} ml-4 whitespace-nowrap`}>
          Digital Gems
        </h1>
      </div>
      <NavLinks isHover={isHover} />
    </div>
  );
};

export default Navbar;
