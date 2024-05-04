import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoonStarsLight } from "react-icons/pi";

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleThemeMode } = useContext(ThemeContext);
  return (
    <>
      {isDarkMode ? (
        <IoSunnyOutline
          size={24}
          color="gray"
          onClick={toggleThemeMode}
          cursor="pointer"
        />
      ) : (
        <PiMoonStarsLight
          size={24}
          color="black"
          onClick={toggleThemeMode}
          cursor="pointer"
        />
      )}
    </>
  );
};

export default ThemeToggle;
