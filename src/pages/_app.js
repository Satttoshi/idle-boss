import GlobalStyle from "~/styles";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import useStore from "~/src/zustand/store";

export default function App({ Component, pageProps }) {
  const setMoney = useStore((state) => state.setMoney);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === " ") {
        setMoney(1000000000);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setMoney]);

  return (
    <ThemeProvider
      defaultTheme="theme0"
      themes={["theme0", "theme1", "theme2"]}
    >
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
