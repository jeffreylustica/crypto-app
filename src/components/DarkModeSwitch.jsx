import {useSelector} from "react-redux"
import { HiMoon } from "react-icons/hi";

const DarkModeSwitch = () => {
  const isHover = useSelector((state) => state.isHover.isHover)

  return (
    <div className="flex items-center sm:mt-auto sm:mb-4 sm:w-full sm:ml-4">
      <div className="group bg-text-primary-dark-900 hover:bg-text-primary-dark-800 p-2 rounded-lg cursor-pointer">
        <HiMoon className="text-white"/>
      </div>
      <span className={`ml-4 hidden whitespace-nowrap ${isHover ? "sm:flex" : "sm:hidden"}`}>Dark Mode</span>
    </div>
  );
};

export default DarkModeSwitch;
