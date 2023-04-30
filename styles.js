import { createGlobalStyle } from "styled-components";

import localfont from "@next/font/local";

const fredoka = localfont({ src: "/public/fonts/fredoka.ttf" });
const carterOne = localfont({
  src: [{ path: "/public/fonts/carter_one.ttf", weight: "400" }],
});

const theme0 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#b8da66",
  "--4": "#329691",
  "--5": "#185362",
  "--6": "#06161B",
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
  "--3": "#EABABA",
  "--4": "#B87819",
  "--5": "#761414",
  "--6": "#2F1B1B",
};

const theme3 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#FFDF7D",
  "--4": "#BF93CD",
  "--5": "#825D9F",
  "--6": "#491E70",
};

const theme4 = {
  "--1": "#f2ffda",
  "--2": "#d0f086",
  "--3": "#F4B10F",
  "--4": "#525C6C",
  "--5": "#393E46",
  "--6": "#222831",
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

    --shadow1: 0px 4px 4px rgba(0, 0, 0, 0.4);
    --shadow2: 0px 2px 2px rgba(0, 0, 0, 0.3);
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

  [data-theme="theme3"] {
    --1: ${() => theme3["--1"]};
    --2: ${() => theme3["--2"]};
    --3: ${() => theme3["--3"]};
    --4: ${() => theme3["--4"]};
    --5: ${() => theme3["--5"]};
    --6: ${() => theme3["--6"]};
  }

  [data-theme="theme4"] {
    --1: ${() => theme4["--1"]};
    --2: ${() => theme4["--2"]};
    --3: ${() => theme4["--3"]};
    --4: ${() => theme4["--4"]};
    --5: ${() => theme4["--5"]};
    --6: ${() => theme4["--6"]};
  }


  body {
    margin: 0;
    background-color: var(--6);
    color: var(--1);
    overflow: hidden;
  }



  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

`;
