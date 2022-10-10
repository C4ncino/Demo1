import React from "react";
import Alumno from "./Alumno";

//Component
const Lista = () => {
    const alumnos = 0;

    return (
      <>
        <h1>Lista de Alumnos</h1>
        <ul>
            <li>
                <Alumno name = "Carlos" lastname = "Cancino" mat = "193305"/>
            </li>

            <li>
                <Alumno name = "Jp" lastname = "Haro" mat = "180236"/>
            </li>

        </ul>
      </>
    );
};

export default Lista;