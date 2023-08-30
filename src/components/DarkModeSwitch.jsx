import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiMoon, HiSun, HiDesktopComputer, HiChevronUp } from "react-icons/hi";

const DarkModeSwitch = () => {
  const isHover = useSelector((state) => state.isHover.isHover);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "System"
  );
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { text: "Light", icon: HiSun, isSelected: false },
    { text: "Dark", icon: HiMoon, isSelected: false },
    { text: "System", icon: HiDesktopComputer, isSelected: true },
  ];

  useEffect(() => {
    switch (theme) {
      case "Dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "Dark");
        break;
      case "Light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "Light");
        break;
      default:
        localStorage.removeItem("theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        break;
    }
  }, [theme]);

  useEffect(() => {
    const mediaWatcher = window.matchMedia("(prefers-color-scheme: dark)");

    mediaWatcher.addEventListener("change", updateSystemPref);

    function updateSystemPref(e) {
      if (!("theme" in localStorage)) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    return function cleanUp() {
      mediaWatcher.removeEventListener("change", updateSystemPref);
    };
  }, []);

  return (
    <div
      className="relative flex items-center sm:mt-auto sm:mb-4 sm:w-full sm:px-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-700 sm:p-3 max-sm:mr-4 group cursor-pointer"
      onClick={() => setIsOpen((prevState) => !prevState)}
    >
      <div className="group-hover:bg-accent-500 bg-text-primary-dark-900 dark:bg-white p-2 rounded-lg sm:ml-1">
        {themes
          .filter((themeOpt) => themeOpt.text === theme)
          .map((theme, i) => (
            <theme.icon
              key={i}
              className={`text-white dark:text-text-primary-dark-900`}
            />
          ))}
      </div>
      <span
        className={`ml-4 hidden whitespace-nowrap ${
          isHover ? "sm:flex" : "sm:hidden"
        }`}
      >
        {`${theme} Mode`}
      </span>
      {isHover && (
        <span className="ml-1 text-lg max-sm:hidden">
          <HiChevronUp />
        </span>
      )}

      {/* theme options */}
      <div
        className={`absolute -top-[150px] text-base origin-bottom duration-300 sm:ml-1 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        {themes.map((theme, i) => (
          <div
            key={i}
            className="flex items-center p-2 bg-gray-200 hover:bg-accent-500 mb-4 rounded-md"
            onClick={() => setTheme(theme.text)}
          >
            <theme.icon className="text-text-primary-dark-900" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DarkModeSwitch;
