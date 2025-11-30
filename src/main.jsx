import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { MainProvider } from './contexts/MainContext';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <MainProvider>
        <RouterProvider router={routes} />
      </MainProvider>
    </ThemeProvider>
  </StrictMode>
);
