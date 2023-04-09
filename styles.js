import { createGlobalStyle } from "styled-components";
import { Fredoka } from "@next/font/google";
import { Carter_One } from "@next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
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
  "--3": "#03C988",
  "--4": "#1C82AD",
  "--5": "#00337C",
  "--6": "#13005A",
};

const theme2 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#E43F5A",
  "--4": "#1F4068",
  "--5": "#162447",
  "--6": "#1B1B2F",
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

  [data-theme="theme2"] {
    --1: ${() => theme2["--1"]};
    --2: ${() => theme2["--2"]};
    --3: ${() => theme2["--3"]};
    --4: ${() => theme2["--4"]};
    --5: ${() => theme2["--5"]};
    --6: ${() => theme2["--6"]};
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
