import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
  }

  html, 
  body, 
  #root {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    /* overflow-x: hidden; */
    overflow: hidden;
    cursor: default;
    overscroll-behavior: none;
    box-sizing: border-box;

  }

  a {
    all: unset;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, 
      Consolas, 'Courier New', monospace;
  }
`

export default GlobalStyle