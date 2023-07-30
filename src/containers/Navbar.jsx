import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineChartBar,
  HiOutlineNewspaper,
} from "react-icons/hi";
import DarkModeSwitch from "../components/DarkModeSwitch";

const Navbar = () => {
  return (
    <div className="mobile-nav sm:desktop-nav sm:pt-4">
      <div className="mb-8 hidden sm:flex">
        <img src={reactLogo} className="mr-2" alt="crypto app logo" />
        <h1 className="font-bold text-lg">Digital Gems</h1>
      </div>
      <nav className="w-full flex items-center justify-around sm:h-full sm:flex-col sm:justify-start sm:items-start">
        <Link
          to="/"
          className="flex items-center hover:bg-gray-200 p-4 rounded-full sm:w-full sm:py-4 sm:px-4 sm:rounded-none"
        >
          <HiOutlineHome className="sm:mr-2" />
          <span className="hidden sm:flex">Home</span>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="flex items-center hover:bg-gray-200 p-4 rounded-full sm:w-full sm:py-4 sm:px-4 sm:rounded-none"
        >
          <HiOutlineChartBar className="sm:mr-2" />
          <span className="hidden sm:flex">Cryptocurrencies</span>
        </Link>
        <Link
          to="/news"
          className="flex items-center hover:bg-gray-200 p-4 rounded-full sm:w-full sm:py-4 sm:px-4 sm:rounded-none"
        >
          <HiOutlineNewspaper className="sm:mr-2" />
          <span className="hidden sm:flex">News</span>
        </Link>
        <DarkModeSwitch />
      </nav>
    </div>
  );
};

export default Navbar;
