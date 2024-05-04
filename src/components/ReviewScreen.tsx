import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ReviewScreenProvider } from "../context/ReviewScreenContext";
import Sidebar from "./Sidebar";
import DocumentPreviewer from "./DocumentPreviewer";
import ThemeProvider from "../styles/ThemeProvider";
import { ThemeContext } from "../context/ThemeContext";
import useKeyboardShortcuts from "../hooks/useKeyboardShortcuts";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
`;

const ReviewScreen: React.FC = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const handleKeyDown = useKeyboardShortcuts();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <ThemeProvider isDarkMode={isDarkMode}>
      <ReviewScreenProvider>
        <Container>
          <DocumentPreviewer />
          <Sidebar />
        </Container>
      </ReviewScreenProvider>
    </ThemeProvider>
  );
};

export default ReviewScreen;
