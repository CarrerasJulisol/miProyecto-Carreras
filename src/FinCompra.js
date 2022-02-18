import { useEffect, useState } from "react"
import { useCarrito } from "./context/CartContext"
import { getFirebase, getFirestore } from "./firebase"


function FinCompra() {
    const { ordenID } = useCarrito()
    const [ orden, setOrden ] = useState()
    // agrega en firestore el id del producto a la orden
    useEffect(() => {
        const db = getFirestore()
        const coleccion = db.collection("ordenes")
        coleccion.get()
        .then((res) => setOrden({id: res.id, ...res.data()}))
    }, [])

    return (
        <div>
            <h2>Muchas gracias por su compra!</h2>
            <p>Estamos preparando su pedido</p>
            <p>ID de seguimiento de su pedido: {ordenID}</p>
        </div>
        
    )
}

export default FinCompra