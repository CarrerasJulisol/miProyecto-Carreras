import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../../context/CartContext"
import { getFirestore } from "../../firebase"
import firebase from "firebase"
import 'firebase/firestore'

function Comprar() {
    const { carro, setCarro, setEnCarro, total, setOrdenID } = useCarrito()
    const navigate = useNavigate()
    const [compraNombre, setCompraNombre] = useState("")
    const [compraApellido, setCompraApellido] = useState("")
    const [compraTelef, setCompraTelef] = useState("")
    const [compraMail, setCompraMail] = useState("")
    const [compraDirec, setCompraDirec] = useState("")

    function detalleCompra() {

        return (
            carro.map((element) => {
                return (
                    <div key={element.producto.id}>
                        <div>{element.producto.nombre}</div>
                        <div>{element.cantidad}</div>
                    </div>)
            }))
    }

    function finalizar(event) {
        event.preventDefault()
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

        if (!compraNombre || !compraDirec) {
            alert("Complete los campos necesarios, por favor.")
            return false
        }else {
            alert("Compra realizada")
            const db = getFirestore()
            db.collection("ordenes").add(nuevaCompra).then((res) => setOrdenID(res.id))
            setCarro([])
            setEnCarro(0)
            navigate(`/compra-finalizada`)
        }
    }



    return (
        <>
            <h3>Introduzca sus datos</h3>
            <form onSubmit={finalizar}>
                <label htmlFor="compraNombre">Nombre</label>
                <input type="text" id="nombre" name="compraNombre" placeholder="Escriba su nombre" value={compraNombre} onChange={(e) => setCompraNombre(e.target.value)}></input>

                <label htmlFor="compraApellido">Apellido</label>
                <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su apellido" value={compraApellido} onChange={(e) => setCompraApellido(e.target.value)}></input>

                <label htmlFor="compraApellido">Telefono</label>
                <input type="number" id="telefono" name="compraTelef" placeholder="Escriba su numero de telefono" value={compraTelef} onChange={(e) => setCompraTelef(e.target.value)}></input>

                <label htmlFor="compraApellido">Correo electronico</label>
                <input type="text" id="mail" name="compraMail" placeholder="Escriba su direccion de correo" value={compraMail} onChange={(e) => setCompraMail(e.target.value)}></input>

                <label htmlFor="compraApellido">Direccion</label>
                <input type="text" id="apellido" name="compraApellido" placeholder="Escriba su direccion" value={compraDirec} onChange={(e) => setCompraDirec(e.target.value)}></input>
            
                <input type="submit" value="Finalizar compra" />
            </form>
            <h3>Detalles de la compra</h3>
            <div>{carro.length === 0 ? <div className="ajuste">

                <div className="no-prod">Ups, aún no tienes productos.</div>
                <button className="no-prod-btn" onClick={() => navigate(`/productos`)}>Volver a ver productos</button>

            </div> : detalleCompra()}</div>
            <div>Total: ${total}</div>
        </>
    )
}

export default Comprar