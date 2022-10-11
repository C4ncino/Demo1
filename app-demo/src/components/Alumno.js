import React from "react";

//Component
const Alumno = ({name, lastname, mat}) => {
    return (
      <>
        <p>
          {name} {lastname} con ID {mat}
        </p>
      </>
    );
};

export default Alumno;
