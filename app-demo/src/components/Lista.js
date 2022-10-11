import React from "react";
import Alumno from "./Alumno";

//Component
const Lista = ({listNombres, listApellidos, listMatriculas}) => {

    const listAlumnos = listNombres.map((nombre, i) =>
        <Alumno name = {nombre} lastname = {listApellidos[i]} mat = {listMatriculas[i]}/>
    )

    return (
      <>
        <h1>Lista de Alumnos</h1>
        <ul>

            {listAlumnos.map((alumno, i) => {
                return (
                    <li key = {i}> 
                        {alumno}
                    </li>
                )
            })}

        </ul>
      </>
    );
};

export default Lista;