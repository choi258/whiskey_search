import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Whiskeys from './whiskeys';


ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Whiskeys />
    </StyledEngineProvider>
  </React.StrictMode>
);