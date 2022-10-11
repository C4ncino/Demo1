import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Lista from './components/Lista';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [sesion, cambiarSesion] = useState(true);
  const [cuenta, cambiaCuenta] = useState(0)

  const nombres = ["Carlos", "JP"];
  const apellidos = ["Cancino", "Haro"];
  const matriculas = ["193305", "183025"]
  // let sesion = true;
  // const cambiarSesion = () => {
  //   console.log(sesion)
  //   sesion = !sesion;
  //   console.log(sesion)
  // };

  return (
    <>
      {sesion === true ? (
        <>
          <Lista listNombres = {nombres} listApellidos = {apellidos} listMatriculas = {matriculas}/>
          <button onClick={() => cambiarSesion(false)} > Cerrar Sesión </button>
          
          <h3>Contador : {cuenta} </h3>
          <button onClick={() => cambiaCuenta(cuenta + 1)}> Aumenta </button>
          <button onClick={() => cambiaCuenta(cuenta - 1)}> Decrementa </button>
          <button onClick={() => cambiaCuenta(cuenta * 2)}> Duplica </button>
          <button onClick={() => cambiaCuenta(cuenta / 2)}> Divide </button>
        </>
        ) : (
        <>
        <h2>No has iniciado sesion</h2>
          <button onClick={() => cambiarSesion(true)} > Iniciar Sesión </button>
        </>
        )
      }
    </>
  );
}

root.render(
  <App/>
);