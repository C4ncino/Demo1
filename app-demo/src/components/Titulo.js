import React from "react";

const TituloRojo = () => {
    const name = 'Carlos';

    return (
        <h1 className = 'Title' style = {{color : 'red'}}>
          Hola {name}
        </h1>
    );
};

const TituloVerde = ({alumno, matricula, color}) => {

    return (
        <h1 className = 'Title' style = {{color : color}}>
          Hola {alumno} con id {matricula}
        </h1>
    );
};

export {TituloRojo, TituloVerde};