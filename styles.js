import { createGlobalStyle } from "styled-components";
import { Fredoka } from "@next/font/google";
import { Carter_One } from "@next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "600", "700"] });
const carterOne = Carter_One({ subsets: ["latin"], weight: ["400"] });

const theme0 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#b8da66",
  "--4": "#329691",
  "--5": "#185362",
  "--6": "#082026",
};

const theme1 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#b8da66",
  "--4": "#329691",
  "--5": "#185362",
  "--6": "#082026",
};

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  :root {
    --1: ${() => theme0["--1"]};
    --2: ${() => theme0["--2"]};
    --3: ${() => theme0["--3"]};
    --4: ${() => theme0["--4"]};
    --5: ${() => theme0["--5"]};
    --6: ${() => theme0["--6"]};

    --font1: ${fredoka.style.fontFamily}, serif;
    --font2: ${carterOne.style.fontFamily}, serif;
  }

  [data-theme="theme1"] {
    --1: ${() => theme1["--1"]};
    --2: ${() => theme1["--2"]};
    --3: ${() => theme1["--3"]};
    --4: ${() => theme1["--4"]};
    --5: ${() => theme1["--5"]};
    --6: ${() => theme1["--6"]};
}

  body {
    margin: 0;
    background-color: var(--6);
    color: var(--1);
  }

  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }
`;
