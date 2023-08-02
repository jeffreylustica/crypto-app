import { useSelector } from "react-redux";
import { HiMoon } from "react-icons/hi";

const DarkModeSwitch = () => {
  const isHover = useSelector((state) => state.isHover.isHover);

  return (
    <div className="flex items-center justify-center sm:mt-auto sm:mb-4 sm:w-full sm:px-4">
      <span
        className={`mr-4 hidden whitespace-nowrap ${
          isHover ? "sm:flex" : "sm:hidden"
        }`}
      >
        Dark Mode
      </span>
      <div className="group bg-text-primary-dark-900 hover:bg-accent-500 p-2 rounded-lg cursor-pointer max-sm:mr-4">
        <HiMoon className="text-white" />
      </div>
    </div>
  );
};

export default DarkModeSwitch;
