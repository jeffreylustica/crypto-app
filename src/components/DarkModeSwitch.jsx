import { useSelector } from "react-redux";
import { HiMoon } from "react-icons/hi";

const DarkModeSwitch = () => {
  const isHover = useSelector((state) => state.isHover.isHover);

  return (
    <div className="flex items-center sm:mt-auto sm:mb-4 sm:w-full sm:px-4 sm:hover:bg-gray-100 p-3 sm:ml-1 group cursor-pointer">
      <div className="group-hover:bg-accent-500 bg-text-primary-dark-900 p-2 rounded-lg max-sm:mr-4">
        <HiMoon className="text-white" />
      </div>
      <span
        className={`ml-4 hidden whitespace-nowrap ${
          isHover ? "sm:flex" : "sm:hidden"
        }`}
      >
        Dark Mode
      </span>
    </div>
  );
};

export default DarkModeSwitch;
