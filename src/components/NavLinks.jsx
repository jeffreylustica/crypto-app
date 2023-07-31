import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineNewspaper,
} from "react-icons/hi";
import DarkModeSwitch from "../components/DarkModeSwitch";

const NavLinks = ({ isHover }) => {
  const links = [
    { name: "Home", path: "/", icon: HiOutlineHome },
    {
      name: "Cryptocurrencies",
      path: "/cryptocurrencies",
      icon: HiOutlineChartBar,
    },
    { name: "News", path: "/news", icon: HiOutlineNewspaper },
  ];
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "font-bold" : "";
  };

  return (
    <nav className="h-full flex justify-around sm:flex-col">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.path}
          className={`${navLinkStyles} flex items-center py-4 pl-4 hover:bg-gray-50`}
        >
          <link.icon className="text-2xl mr-4" />
          <span className={`${isHover ? "flex" : "hidden"}`}>{link.name}</span>
        </NavLink>
      ))}
      <DarkModeSwitch />
    </nav>
  );
};

export default NavLinks;
