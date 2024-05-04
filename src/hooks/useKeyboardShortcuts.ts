import { useCallback, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useKeyboardShortcuts = () => {
  const { toggleThemeMode } = useContext(ThemeContext);
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "t":
          toggleThemeMode();
          break;
        default:
          break;
      }
    },
    [toggleThemeMode]
  );

  return handleKeyDown;
};

export default useKeyboardShortcuts;
