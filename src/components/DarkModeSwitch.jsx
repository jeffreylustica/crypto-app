import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useState(null);
  const isHover = useSelector((state) => state.isHover.isHover);

  useEffect(() => {
    if (window.matchMedia("prefer-color-scheme: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className="flex items-center sm:mt-auto sm:mb-4 sm:w-full sm:px-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-700 sm:p-3 max-sm:mr-4 group cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="group-hover:bg-accent-500 bg-text-primary-dark-900 dark:bg-white p-2 rounded-lg sm:ml-1">
        {theme === "light" ? (
          <HiMoon className="text-white" />
        ) : (
          <HiSun className="text-text-primary-dark-900" />
        )}
      </div>
      <span
        className={`ml-4 hidden whitespace-nowrap ${
          isHover ? "sm:flex" : "sm:hidden"
        }`}
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
};

export default DarkModeSwitch;
