import Item from "./Item"
import { useEffect, useState } from "react"

function ItemList() {
    const [prod, setProd] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const URL = "http://localhost:3001/productos"

        setCargando(true)
        fetch(URL)
            .then((response) => response.json())
            .then((json) => setProd(json))
            .catch((error) => console.log('Ha habido un error al buscar los datos'))
            .finally(() => setCargando(false))
            
    }, [])

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }
    
    return <div className="contenedor-list">
        {prod.map((producto) => {
            return <Item key={producto.id} producto={producto} />})}
    </div>
}

export default ItemList