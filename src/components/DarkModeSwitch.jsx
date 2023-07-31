import { HiMoon } from "react-icons/hi";

const DarkModeSwitch = () => {
  return (
    <div className="flex items-center justify-between sm:mt-auto sm:mb-4 sm:w-full sm:ml-4">
      <span className="mr-2 hidden">Dark Mode</span>
      <div className="bg-white hover:bg-gray-400 p-2 rounded-lg">
        <HiMoon />
      </div>
    </div>
  );
};

export default DarkModeSwitch;
