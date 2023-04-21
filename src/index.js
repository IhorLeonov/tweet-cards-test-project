import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/components/App/App';
import { GlobalStyle } from 'constants/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
