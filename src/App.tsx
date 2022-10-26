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
import RequireAuth from './components/auth/RequireAuth';
import AuthProvider from './features/auth/AuthProvider';
import LogIn from './views/LogIn';
import SignIn from './views/SignIn';
import useAuth from './tools/useAuth';


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#ffc889',
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
      paper: '#ffc889',
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
  const auth = useAuth();

  return (
    <div className={auth.user ? 'App-logued' : 'App'}>
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RequireAuth required={true}><MainLayout /></RequireAuth>}>
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
            {/* <Route path="/about" element={<About />} /> */}

            <Route path="/login" element={<RequireAuth required={false} exclud={true}><LogIn /></RequireAuth>} />
            <Route path="/signin" element={<RequireAuth required={false} exclud={true}><SignIn /></RequireAuth>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
