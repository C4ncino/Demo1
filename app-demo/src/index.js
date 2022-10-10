import React from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './components/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

const sesion = true;

// Fragment
const jsx = (
  <>
    {sesion === true ? (
      <>
        <Lista/>
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