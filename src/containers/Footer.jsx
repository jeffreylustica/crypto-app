import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 flex flex-col justify-end items-center p-4 max-sm:mb-[--mobile-nav-height]">
      <h3 className="text-lg font-bold">Digital Gems</h3>
      <p className="mb-4">All rights reserved</p>
      <div className="flex gap-8">
        <NavLink
          className={({ isActive }) => (isActive ? "text-accent-500" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-accent-500" : "")}
          to={"/cryptocurrencies"}
        >
          Cryptocurrencies
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-accent-500" : "")}
          to={"/News"}
        >
          News
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
