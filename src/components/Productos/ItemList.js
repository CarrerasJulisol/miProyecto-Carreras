import Item from "./Item"
import { useEffect, useState } from "react"
import { getFirestore } from "../../firebase"

function ItemList() {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const db = getFirestore()
        setCargando(true)
        const coleccion = db.collection("productos")
        coleccion.get()
        .then((res) => setProducto(res.docs.map((res) => ({...res.data(), id: res.id}))))
        .then(()=> setCargando(false))
        .catch((error)=> setError(error))
    }, [])

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }else if(error) {
        return <div className="cargando-pag"><p className="estilo-cargando">Lo sentimos, ha habido un error. Intente nuevamente más tarde.</p></div>
    }else{
        return (
            <>
            <div className="contenedor-list" id="root">
                {producto.map((producto) => {
                    return <Item key={producto.id} producto={producto} />})}
            </div>
        </>)
    }

}

export default ItemList