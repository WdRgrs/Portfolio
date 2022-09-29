import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    /* box-sizing: border-box; */
    font-family: something;
    -webkit-font-smoothing: anialiased;
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

    /* margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; */
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