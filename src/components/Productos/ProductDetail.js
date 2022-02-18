import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore } from "../../firebase"
import ItemDetail from "./ItemDetail"


function ProductDetail() {
    const {productoId} = useParams()
    const [producto, setProducto] = useState()
    const [cargando, setCargando] = useState(false)
    
    useEffect(() => {
        const db = getFirestore()
        const coleccion = db.collection("productos")
        const prodElegido = coleccion.doc(productoId)
        prodElegido.get()
        .then((res) => setProducto({...res.data(), id: res.id}))
    }, [productoId])

    console.log(producto)
    if (cargando || !producto) return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    return (
        <ItemDetail producto={producto} />
    )
}

export default ProductDetail