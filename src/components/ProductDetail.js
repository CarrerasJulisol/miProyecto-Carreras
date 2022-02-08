import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

function ProductDetail() {
    const {productoId} = useParams()
    const [producto, setProducto] = useState()
    const [cargando, setCargando] = useState(false)

    useEffect(()=> {
        const URL = `http://localhost:3001/productos/${productoId}`
        setCargando(true)
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProducto(data))
        .finally(() => setCargando(false))
    }, [productoId])

    
    if (cargando || !producto) return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    return (
        <ItemDetail producto={producto}/>
    )
}

export default ProductDetail