import GlobalStyle from "../styles";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
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
