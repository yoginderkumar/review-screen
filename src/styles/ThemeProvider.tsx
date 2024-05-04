import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeProviderProps {
  isDarkMode: boolean;
  children: React.ReactNode;
}

const theme = {
  colors: {
    background: "#ffffff", // Light mode background color
    text: "#333333", // Light mode text color
    secondBase: "#E0E0E0",
    secondText: "#757575",
  },
};

const darkTheme = {
  colors: {
    background: "#222222", // Dark mode background color
    text: "#fff", // Dark mode text color
    secondText: "#9E9E9E",
    secondBase: "#424242",
  },
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  isDarkMode,
  children,
}) => {
  return (
    <StyledThemeProvider theme={isDarkMode ? darkTheme : theme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
