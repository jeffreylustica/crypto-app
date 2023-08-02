import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineChartBar,
  HiChartBar,
  HiOutlineNewspaper,
  HiNewspaper,
} from "react-icons/hi";
import { DarkModeSwitch } from "./index";

const NavLinks = ({ isHover }) => {
  const links = [
    { name: "Home", path: "/", icon: HiOutlineHome, activeIcon: HiHome },
    {
      name: "Cryptocurrencies",
      path: "/cryptocurrencies",
      icon: HiOutlineChartBar,
      activeIcon: HiChartBar,
    },
    {
      name: "News",
      path: "/news",
      icon: HiOutlineNewspaper,
      activeIcon: HiNewspaper,
    },
  ];

  return (
    <nav className="h-full flex justify-around items-center sm:items-start sm:flex-col">
      {links.map((link, i) => (
        <NavLink
          key={i}
          to={link.path}
          className={`flex items-center hover:bg-gray-100 p-2 max-sm:rounded-full ${
            isHover
              ? "sm:w-[var(--hovered-nav-width)]"
              : "sm:w-[var(--initial-nav-width)]"
          } sm:py-4 sm:pl-5`}
        >
          {({ isActive }) => {
            return isActive ? (
              <>
                <link.activeIcon className="text-2xl sm:mr-4 text-accent-500" />
                <span
                  className={`hidden font-bold text-accent-500 ${
                    isHover ? "sm:flex" : "sm:hidden"
                  }`}
                >
                  {link.name}
                </span>
              </>
            ) : (
              <>
                <link.icon className="text-2xl sm:mr-4" />
                <span className={`hidden ${isHover ? "sm:flex" : "sm:hidden"}`}>
                  {link.name}
                </span>
              </>
            );
          }}
        </NavLink>
      ))}
      <DarkModeSwitch />
    </nav>
  );
};

export default NavLinks;
