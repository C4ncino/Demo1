import React from "react";
import Alumno from "./Alumno";

//Component
const Lista = (listNombres, listApellidos, listMatriculas) => {
    let listAlumnos = []
    
    const creaAlumno = () => {
        listNombres.map( (nombre, i) => {
            listAlumnos.push( <li> <Alumno name = {nombre} lastname = {listApellidos[i]} mat = {listMatriculas[i]}/> </li>)
        })
    }

    creaAlumno();



    return (
      <>
        <h1>Lista de Alumnos</h1>
        <ul>
            {/* <li>
                <Alumno name = "Carlos" lastname = "Cancino" mat = "193305"/>
            </li>

            <li>
                <Alumno name = "Jp" lastname = "Haro" mat = "193305"/>
            </li> */}
            
            {listAlumnos.map( (alumno, i) => {
            return <li key = {i}>{alumno}</li>
            } )}

        </ul>
      </>
    );
};

export default Lista;