import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getFirestore } from "../firebase"

const IniciarSesion = () => {
    let navigate = useNavigate()
    const db = getFirestore()
    const usuarios = db.collection("usuarios")

    const [nombreUser, setNombreUser] = useState("")
    const [userNom, setUserNom] = useState("")
    const [userAp, setUserAp] = useState("")
    const [userTel, setUserTel] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userDirec, setUserDirec] = useState("")
    
    const datoUser = {
        usuario: nombreUser,
        userNombre: userNom,
        userApellido: userAp, 
        userTelef: userTel,
        userMail: userMail,
        userDirecc: userDirec
    }

    const [ok, setOk ] = useState(0)

    function continuar() {
        console.log("finalizado")
        setOk("si")
    }

    function noContinuar() {
        console.log("no ingresó datos")
        setOk("no")
    }

    function noDatos() {
        return <div className="modal-no-hay">
            <div className="estilo-no-hay">
                <h3>Ups, no ingresaste todos tus datos.</h3>
                <p>Por favor vuelve e ingresa todos tus datos necesarios para continuar.</p>
                <button onClick={()=> setOk(0)}>Completar datos</button>
            </div>
        </div>
    }

    function creado() {
        sessionStorage.setItem('sesion', "true")
        setTimeout(function(){
            navigate('/');
        }, 5000);

        return (
            <div className="modal-no-hay">
            <div className="estilo-no-hay">
                <h3>¡Usuario creado con éxito!</h3>
                <p>Espera unos segundos a ser redirigido</p>
            </div>
        </div>
        
        )
    }

    const [userID, setUserID] = useState("")
    // agregar nuevo usuario a firebase
    const nuevoUsuario = (event) => {
        event.preventDefault()
              if (!nombreUser || !userNom || !userAp || !userMail) {
                noContinuar()
                return false
        }else{
           continuar()
        }
        event.preventDefault()
        usuarios
        .add(datoUser)
        .then((res) => setUserID(res.id))
        .then(() => console.log(userID))
        .then(() => localStorage.setItem("usuarioID", userID))
    }

    return <div>
        <div>
        <form onSubmit={nuevoUsuario} className="formulario">
                    <label htmlFor="compraNombre">Usuario</label>
                    <input type="text" id="usuario" name="compraNombre" placeholder="Elije un nombre de usuario" value={nombreUser} onChange={(e) => setNombreUser(e.target.value)}></input>
                    
                    <label htmlFor="compraNombre">Nombre</label>
                    <input type="text" id="nombre" name="compraNombre" placeholder="Escriba su nombre" value={userNom} onChange={(e) => setUserNom(e.target.value)}></input>

                    <label htmlFor="compraApellido" className="form-position">Apellido</label>
                    <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su apellido" value={userAp} onChange={(e) => setUserAp(e.target.value)}></input>

                    <label htmlFor="compraApellido">Telefono</label>
                    <input type="number" id="telefono" name="compraTelef" placeholder="Escriba su numero de telefono" value={userTel} onChange={(e) => setUserTel(e.target.value)}></input>

                    <label htmlFor="compraApellido" className="form-position">Correo electronico</label>
                    <input type="text" id="mail" name="compraMail" placeholder="Escriba su direccion de correo" value={userMail} onChange={(e) => setUserMail(e.target.value)}></input>

                    <label htmlFor="compraApellido">Direccion</label>
                    <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su direccion" value={userDirec} onChange={(e) => setUserDirec(e.target.value)}></input>
                    
                    <input type="submit" value="Agregar" className="fin-position"/>
                </form>
        </div>
        <div>{ ok === "si" ? creado() : ok === "no" ? noDatos() : null }</div>
        </div>
}

export default IniciarSesion