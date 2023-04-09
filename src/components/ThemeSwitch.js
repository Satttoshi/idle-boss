import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const themeIndex = parseInt(theme.slice(-1));
    const nextThemeIndex = (themeIndex + 1) % 3;
    const nextTheme = `theme${nextThemeIndex}`;
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      onClick={() => {
        toggleTheme();
      }}
    >
      switch theme
    </button>
  );
}
