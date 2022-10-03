import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body, #root {
  height: 100vh
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
