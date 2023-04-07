import { createGlobalStyle } from "styled-components";

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
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
