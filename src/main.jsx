import { QueryClientProvider } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import GlobalContext from './Global/GlobalContext';
import { queryClient } from './Utils/axiosApi';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        dense
        preventDuplicate
        maxSnack={3}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <GlobalContext>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </GlobalContext>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
