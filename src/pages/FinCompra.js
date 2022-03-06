import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../context/CartContext"
import { getFirestore } from "../firebase"



function FinCompra() {
    const { ordenID } = useCarrito()
    const [ orden, setOrden ] = useState()
    const navigate = useNavigate()
    // agrega en firestore el id del producto a la orden
    useEffect(() => {
        const db = getFirestore()
        const coleccion = db.collection("ordenes")
        coleccion.get()
        .then((res) => setOrden({id: res.id, ...res.data()}))
    }, [])

    return (
        <div className="seccion-compra-completa align-mid">
            <h2 className="color">¡Muchas gracias por tu compra!</h2>
            <p>Estamos preparando tu pedido. Este es el ID de seguimiento de tu pedido: {ordenID}</p>
            <p>Volver y <span onClick={()=> navigate(`/productos`)} className="cursor color">
                ver más productos</span> o <span onClick={()=> navigate(`/`)} className="cursor color">ir al inicio.
            </span></p>
        </div>
        
    )
}

export default FinCompra