import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  background-color: #ebd8ff;


  
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-display: swap;
    font-weight: 500;
    src: url('./files/montserrat-cyrillic-ext-500-normal.woff2') format('woff2'),
      url('./files/montserrat-all-500-normal.woff') format('woff');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;

  }

    
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

`;
