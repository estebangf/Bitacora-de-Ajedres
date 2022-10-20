import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/Consultar Bitácora" element={<div>Consultar Bitácora</div>} />
              <Route path="/Planeamiento Semanal" element={<div>Planeamiento Semanal</div>} />
              <Route path="/Notas Diarias" element={<div>Notas Diarias</div>} />
              <Route path="/Revision Semanal" element={<div>Revision Semanal</div>} />
              <Route path="/Como usar" element={<div>Como usar</div>} />
              <Route path="/Perfil" element={<div>Perfil</div>} />
              <Route path="/Opciones" element={<div>Opciones</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
