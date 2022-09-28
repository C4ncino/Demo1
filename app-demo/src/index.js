import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const name = 'Carlos';
const lastname = '';
const sesion = true;

const alumnos = ['Yo', 'Jp', 'Emilio', 'Cova'];

// Fragment
const jsx = (
  <>
    {sesion === true ? (
      <>
        <h1 className = 'Title' style = {{color : 'red'}}>
          Hola {name}
        </h1>
        {lastname && <p>Tu apellido es {lastname}</p>}

        <h3>Lista de Alumnos</h3>
        <ul>
          {alumnos.map( (nombre, i) => {
            return <li key = {i}>{nombre}</li>
          } )}
        </ul>
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


/* const CompruebaSesion = (sesion) => {
  if (sesion === true){
    return jsx;
  }
  else{
    return <h2>No has iniciado sesion</h2>
  }
}

root.render(
  CompruebaSesion(sesion)
); */