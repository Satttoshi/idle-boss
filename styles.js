import { createGlobalStyle } from "styled-components";
import { Headland_One } from "@next/font/google";

const headlandOne = Headland_One({ subsets: ["latin"], weight: ["400"] });

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
    --font1: ${headlandOne.style.fontFamily}, serif;
  }

  body {
    margin: 0;
  }
`;
