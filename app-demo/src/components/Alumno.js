import React from "react";
import {TituloVerde} from "./Titulo";

//Component
const Alumno = () => {
    const lastname = '';
    const alumnos = ['Yo', 'Jp', 'Emilio', 'Rafa'];

    return (
      <>
        <TituloVerde alumno = "Carlos" matricula = "193305" color = "orange"/>

        {lastname && <p>Tu apellido es {lastname}</p>}
  
        <h3>Lista de Alumnos</h3>
        <ul>
          {alumnos.map( (nombre, i) => {
            return <li key = {i}>{nombre}</li>
          } )}
        </ul>
      </>
    );
};

export default Alumno;