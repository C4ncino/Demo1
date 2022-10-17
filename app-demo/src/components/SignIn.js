import React, {useState} from "react"

const SignIn = ({cambiaSigned}) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [validacionP1, setValidacionP1] = useState("");
    const [validacionP2, setValidacionP2] = useState("");

    const [formato, setFormato] = useState(false);
    const [tieneMayus, setTieneMayus] = useState(false);
    const [tieneNumero, setTieneNumero] = useState(false);
    const [minLetras, setMinLetras] = useState(false);
    const [iguales, setIguales] = useState(true)
    const [refresh, setRefresh] = useState(false);

    let regExpMayus = /[A-Z]/;
    let regExpNum = /\d/;
    let mensaje = "";

    const onChange = (e) => {
        if (e.target.name === "user") {
            setUser(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
            setRefresh(true);
        }
        else if (e.target.name === "password2") {
            setPassword2(e.target.value);
            setValidacionP2("Las contraseñas tiene que ser iguales");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        cambiaSigned(true);
    };


    if (password.length > 7 && !minLetras) {
        setMinLetras(true);
    }
    else if (password.length < 8 && minLetras) {
        setMinLetras(false);
    }
    if (password.search(regExpMayus) > -1 && !tieneMayus) {
        setTieneMayus(true);
    }
    else if (password.search(regExpMayus) === -1 && tieneMayus) {
        setTieneMayus(false);
    }
    if (password.search(regExpNum) > -1 && !tieneNumero) {
        setTieneNumero(true);
    }
    else if (password.search(regExpNum) === -1 && tieneNumero) {
        setTieneNumero(false);
    }

    if ((!minLetras || !tieneMayus || !tieneNumero) && refresh) {
        mensaje = "Contaseña debe tener";

        if (!minLetras) {
            mensaje = mensaje + " al menos 8 letras";
        }
        if (!tieneMayus) {
            mensaje = mensaje + " una mayuscula";
        }
        if (!tieneNumero) {
            mensaje = mensaje + " un numero";                  
        }
        
        setValidacionP1(mensaje);
        
        setRefresh(false);

    }
    if (minLetras && tieneMayus && tieneNumero && validacionP1.length > 0) {
        setValidacionP1("");
    }

    if (password2 === password && !iguales) {
        setIguales(true);
        setValidacionP2("");
    }
    else if (password2 !== password && iguales) {
        setIguales(false);
    }
    
    if(minLetras && tieneMayus && tieneNumero && iguales && user.length !== 0 && !formato) {
        setFormato(true);
    }
    
    return ( 
        <form action = "" onSubmit={onSubmit}>
            <h3>Registro</h3>
            <div>
                <label htmlFor = "user">Usuario: </label>
                <input 
                    type = "text" 
                    name = "user" 
                    id = "userS"
                    value = {user}
                    onChange = {onChange} 
                />
            </div>
            <div>
                <label htmlFor = "password">Contraseña: </label>
                <input 
                    type = "password" 
                    name = "password" 
                    id = "passwordS"
                    value = {password}
                    onChange = {onChange} 
                />
            </div>
            <div>
                <label htmlFor = "password">Confirme Contraseña: </label>
                <input 
                    type = "password" 
                    name = "password2" 
                    id = "password2"
                    value = {password2}
                    onChange = {onChange} 
                />
            </div>
            
            {validacionP1.length === 0 ? (
                <></>
            ) : (
                <h5 color="red">{validacionP1}</h5>
            )}
            {validacionP2.length === 0 ? (
                <></>
            ) : (
                <h5 color="red">{validacionP2}</h5>
            )}
            {formato === true ? (
                <>
                    <div>
                        <button>Registrate</button>
                    </div>
                </>
            ) : (
                <></>
            )}

        </form>
    );
}
 
export default SignIn;