import React, {useState} from "react";

const FormularioLogin = ({cambiarSesion}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) => {
        if (e.target.name === "user"){
            setUser(e.target.value)
        }
        else if (e.target.name === "password"){
            setPassword(e.target.value)
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (user === "Carlos" && password === "123"){
            cambiarSesion(true)
            alert("CORRECTO")
        }
        else{
            alert("INCORRECTO")
        }
    };

    return ( 
        <form action = "" onSubmit={onSubmit}>
            {/* <p>Usuario : {user} : {password}</p> */}
            <div>
                <label htmlFor = "user">Usuario: </label>
                <input 
                    type = "text" 
                    name = "user" 
                    id = "user"
                    value = {user}
                    onChange = {onChange} 
                />
            </div>
            <div>
                <label htmlFor = "password">Contraseña: </label>
                <input 
                    type = "password" 
                    name = "password" 
                    id = "password"
                    value = {password}
                    onChange = {onChange} 
                />
            </div>
            <div>
                <button>Inicar Sesion</button>
            </div>
        </form>
    );
}
 
export default FormularioLogin;