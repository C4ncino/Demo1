import React from "react";
import {TituloVerde} from "./Titulo";

//Component
const Alumno = ({name, lastname, mat}) => {
    return (
      <>
        <TituloVerde alumno = {name} apellido = {lastname} matricula = {mat} color = "orange"/>
      </>
    );
};

export default Alumno;