import React, { createContext, useCallback, useState } from "react";

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleThemeMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: true,
  toggleThemeMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const toggleThemeMode = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  const value: ThemeContextProps = {
    isDarkMode,
    toggleThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
