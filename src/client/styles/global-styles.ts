import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, #root {
  height: 100vh;
  background: rgb(166,215,241);
background: linear-gradient(180deg, rgba(166,215,241,1) 3%, rgba(66,209,209,1) 34%, rgba(187,255,199,1) 90%);
position: relative;
z-index: -2;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  display: flex;
  flex-direction: column;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  overflow: auto;
}

`;

export default GlobalStyles;
