import { createGlobalStyle } from "styled-components";
import { Fredoka } from "@next/font/google";
import { Carter_One } from "@next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "600", "700"] });
const carterOne = Carter_One({ subsets: ["latin"], weight: ["400"] });

export default createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    
  }

  :root {
    --1: #f2ffda;
    --2: 	#d0f086;
    --3: #b8da66;
    --4: #329691;
    --5: 	#185362;
    --6: #082026;
    --font1: ${fredoka.style.fontFamily}, serif;
    --font2: ${carterOne.style.fontFamily}, serif;
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
