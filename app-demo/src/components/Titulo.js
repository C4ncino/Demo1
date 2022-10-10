import React from "react";

const TituloRojo = () => {
    const name = 'Carlos';

    return (
        <h1 className = 'Title' style = {{color : 'red'}}>
          Hola {name}
        </h1>
    );
};

const TituloVerde = ({alumno, apellido, matricula, color}) => {

    return (
        <p className = 'Title' style = {{color : color}}>
          {alumno} {apellido} :: id {matricula}
        </p>
    );
};

export {TituloRojo, TituloVerde};