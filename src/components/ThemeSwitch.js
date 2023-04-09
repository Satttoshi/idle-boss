import { useTheme } from "next-themes";
import styled from "styled-components";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const themeIndex = parseInt(theme.slice(-1));
    const nextThemeIndex = (themeIndex + 1) % 3;
    const nextTheme = `theme${nextThemeIndex}`;
    setTheme(nextTheme);
  }

  return (
    <StyledButton
      type="button"
      onClick={() => {
        toggleTheme();
      }}
    >
      theme
    </StyledButton>
  );
}

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;
  height: 24px;
  width: 48px;
  z-index: 25;
  border-radius: 3px;
  background-color: var(--1);

  font-family: var(--font1);
  font-weight: 500;
`;
