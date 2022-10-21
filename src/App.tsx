import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import DailyNote from './views/DailyNote';
import DailyNotesList from './views/DailyNotesList';
import Home from './views/Home';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#f5bf81',
      main: '#7b4b27',
      dark: '#251004',
      contrastText: '#ffc786',
    },
    // secondary?: PaletteColorOptions;
    // error?: PaletteColorOptions;
    // warning?: PaletteColorOptions;
    // info?: PaletteColorOptions;
    // success?: PaletteColorOptions;
    // mode?: PaletteMode;
    // tonalOffset?: PaletteTonalOffset;
    // contrastThreshold?: number;
    // common?: Partial<CommonColors>;
    // grey?: ColorPartial;
    // text?: Partial<TypeText>;
    // divider?: string;
    // action?: Partial<TypeAction>;
    background: {
      paper: '#f5bf81',
    }
    // getContrastText?: (background: string) => string;
  },
});

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
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/Consultar Bitácora" element={<div>Consultar Bitácora</div>} />
              <Route path="/Planeamiento Semanal" element={<div>Planeamiento Semanal</div>} />
              <Route path="/daily-notes-list">
                <Route path="" element={<DailyNotesList />} />
                <Route path=":idNota" element={<DailyNote />} />
              </Route>
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
