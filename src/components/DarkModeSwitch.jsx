import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";

const DarkModeSwitch = () => {
  const isHover = useSelector((state) => state.isHover.isHover);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  // const mediaWatcher = useRef(window.matchMedia("(prefer-color-scheme: dark)"));
  const mediaWatcher = window.matchMedia("(prefer-color-scheme: dark)");

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        // onWindowMatch();
        break;
    }
  }, [theme]);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // const mediaWatcher = window.matchMedia("(prefer-color-scheme: dark)");
    // window.addEventListener("change", updateSystemPref);

    // const media = mediaWatcher.current;
    // media.addEventListener("change", updateSystemPref);

    // function updateSystemPref() {
    //   console.log("changed");
    // }

    // return function cleanUp() {
    //   // mediaWatcher.removeEventListener("change", updateSystemPref);
    //   media.removeEventListener("change", updateSystemPref);
    // };
  }, []);

  mediaWatcher.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
  };

  // const darkQuery = window.matchMedia("(prefer-color-scheme: dark)");

  // console.log(darkQuery);

  // useEffect(() => {
  //   switch ( ) {
  //     case "dark":
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //       console.log("switch dark");
  //       break;
  //     case "light":
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //       console.log("switch light");
  //       break;
  //     default:
  //       localStorage.removeItem("theme");
  //       console.log("switch system");
  //       // onWindowMatch();
  //       break;
  //   }
  // }, [theme]);

  // useEffect(() => {
  //   window
  //     .matchMedia("(prefer-color-scheme: dark)")
  //     .addEventListener("change", (e) => {
  //       // if (!("theme" in localStorage)) {
  //       //   if (e.matches) {
  //       //     document.documentElement.classList.add("dark");
  //       //   } else {
  //       //     document.documentElement.classList.remove("dark");
  //       //   }
  //       // }
  //       if (e.matches) {
  //         console.log(e.matches + "changed");
  //       }
  //     });
  // }, []);

  // const onWindowMatch = () => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // };

  // onWindowMatch();

  return (
    <div
      className="flex items-center sm:mt-auto sm:mb-4 sm:w-full sm:px-4 sm:hover:bg-gray-100 sm:dark:hover:bg-gray-700 sm:p-3 max-sm:mr-4 group cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="group-hover:bg-accent-500 bg-text-primary-dark-900 dark:bg-white p-2 rounded-lg sm:ml-1">
        {theme === "light" ||
        !window.matchMedia("(prefers-color-scheme: dark)").matches ? (
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
