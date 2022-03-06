import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../../context/CartContext"
import { getFirestore } from "../../firebase"
import firebase from "firebase"
import 'firebase/firestore'

function Comprar() {
    const { carro, setCarro, setEnCarro, total, setOrdenID } = useCarrito()
    const navigate = useNavigate()
    // arrays de datos del comprador
    const [compraNombre, setCompraNombre] = useState("")
    const [compraApellido, setCompraApellido] = useState("")
    const [compraTelef, setCompraTelef] = useState("")
    const [compraMail, setCompraMail] = useState("")
    const [compraDirec, setCompraDirec] = useState("")
    
    const sesion = true
    const user = {
        userNombre: "Juli",
        userApellido: "Carreras", 
        userTelef: 1234,
        userMail: "juli@gmail.com",
        userDirecc: "mi casa"
    }

    function detalleCompra() {
        const cuenta = (element) => element.producto.precio * element.cantidad 
        return (
            carro.map((element) => {
                return (
                    <div key={element.producto.id} className="resumen-compra">
                        <div>{element.producto.nombre}</div>
                        <div>{element.cantidad}</div>
                        <div>${cuenta(element)}</div>
                    </div>)
            }))
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

    function confirma() {
        return (
            <div className="modal-confirm">
                <div className="estilo">
                <h4>Confirma tus datos</h4>
                <div className="confirm-colum ">
                    <p className="tipo-dato">Nombre: <span className="dato">{compraNombre}</span></p>
                    <p className="tipo-dato">Apellido: <span className="dato">{compraApellido}</span></p>
                    <p className="tipo-dato">Telefono: <span className="dato">{compraTelef}</span></p>
                    <p className="tipo-dato">Correo: <span className="dato">{compraMail}</span></p>
                    <p className="tipo-dato">Direccion: <span className="dato">{compraDirec}</span></p>
                </div>
                <div className="boton-contenedor">
                    <button onClick={finaliza} className="botones botones-tam">Confirmar</button>
                    <button onClick={()=> setOk(0)} className="botones botones-tam">Editar</button>
                </div>
                </div>
            </div>
        )
    }

    function noDatos() {
        return <div className="modal-no-hay">
        <div className="estilo-no-hay">
            <h3>Ups, no ingresaste todos tus datos.</h3>
            <p>Por favor vuelve e ingresa todos tus datos para continuar.</p>
            <button onClick={()=> setOk(0)} className="botones">Completar datos</button>
        </div>
    </div>
    }

    function finaliza() {
        const nuevaCompra = {
            comprador: {
                compraNombre,
                compraApellido,
                compraTelef,
                compraMail,
                compraDirec,
            },
            compra: carro,
            total: total,
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        
        const db = getFirestore()
        db.collection("ordenes").add(nuevaCompra).then((res) => setOrdenID(res.id))
        carro.forEach(element => {
            const idProd = element.producto.id
            console.log(idProd)
            const nuevoStock = element.producto.stock - element.cantidad
            db.collection("productos").doc(idProd).update({stock: nuevoStock})
         });
        setCarro([])
        setEnCarro(0)
        navigate(`/compra-finalizada`)
    }

    function finalizar(event) {
        event.preventDefault()
              if (!compraNombre || !compraDirec) {
                noContinuar()
                return false
        }else{
           continuar()
        }
    }   
    
    

    return (
        <div className="secccion-fin-compra">
            <h3 className="marg-position color">Introduzca sus datos</h3>
            <div className="contenedor-form">
                <form onSubmit={finalizar} className="formulario">
                    <label htmlFor="compraNombre">Nombre</label>
                    <input type="text" id="nombre" name="compraNombre" placeholder="Escriba su nombre" value={compraNombre} onChange={(e) => setCompraNombre(e.target.value)}></input>

                    <label htmlFor="compraApellido" className="form-position">Apellido</label>
                    <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su apellido" value={compraApellido} onChange={(e) => setCompraApellido(e.target.value)}></input>

                    <label htmlFor="compraApellido">Telefono</label>
                    <input type="number" id="telefono" name="compraTelef" placeholder="Escriba su numero de telefono" value={compraTelef} onChange={(e) => setCompraTelef(e.target.value)}></input>

                    <label htmlFor="compraApellido" className="form-position">Correo electronico</label>
                    <input type="text" id="mail" name="compraMail" placeholder="Escriba su direccion de correo" value={compraMail} onChange={(e) => setCompraMail(e.target.value)}></input>

                    <label htmlFor="compraApellido">Direccion</label>
                    <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su direccion" value={compraDirec} onChange={(e) => setCompraDirec(e.target.value)}></input>
                    
                    <input type="submit" value="Finalizar compra" className="fin-position botones"/>
                </form>
            </div>
            <h3 className="marg-position color">Detalles de la compra</h3>
            <div className="marg-position">{carro.length === 0 ? <div className="ajuste">

                <div className="no-prod">Ups, aún no tienes productos.</div>
                <button className="no-prod-btn" onClick={() => navigate(`/productos`)}>Volver a ver productos</button>

            </div> : detalleCompra()}</div>
            <div className="marg-position total-carro">Total: ${total}</div>
            <div>{ ok === "si" ? confirma() : ok === "no" ? noDatos() : null }</div>
        </div>
    )
}

export default Comprar