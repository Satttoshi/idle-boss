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
    <StyledField>
      <StyledSpan>Theme:</StyledSpan>
      <StyledPalette onClick={toggleTheme}>
        <StyledColor color="5" />
        <StyledColor color="4" />
        <StyledColor color="3" />
        <StyledColor color="6" />
      </StyledPalette>
      <StyledButton type="button" onClick={toggleTheme}>
        change!
      </StyledButton>
    </StyledField>
  );
}

const StyledSpan = styled.span`
  position: absolute;
  top: 19px;
  left: 0px;

  font-family: var(--font1);
  font-size: 1rem;
  font-weight: 500;
  color: var(--1);
  text-align: right;

  width: 87px;
`;

const StyledPalette = styled.div`
  position: absolute;
  top: 16px;
  left: 101px;
  display: flex;
  gap: 2px;
`;

const StyledColor = styled.div`
  width: 38px;
  height: 26px;

  background: var(--${({ color }) => color});
  border: 2px solid var(--1);
  border-radius: 4px;
`;

const StyledField = styled.div`
  position: relative;
  width: 375px;
  height: 60px;
`;

const StyledButton = styled.button`
  appearance: none;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 18px;
  right: 34px;

  width: 69px;
  height: 24px;

  background-color: var(--1);
  border-radius: 3px;

  font-family: var(--font1);
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: var(--5);

  @media (hover: hover) {
    &:hover:enabled {
      background-color: var(--3);
    }
  }

  @media (hover: none) {
    &:active:enabled {
      background-color: var(--3);
    }
  }
`;
