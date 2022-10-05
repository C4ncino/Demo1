import React from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from './components/Alumno';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sesion = true;

// Fragment
const jsx = (
  <>
    {sesion === true ? (
      <>
        <Alumno/>
        <Alumno/>
        <Alumno/>
      </>
      ) : (
      <h2>No has iniciado sesion</h2>
      )
    }
  </>
);

root.render(
  jsx
);