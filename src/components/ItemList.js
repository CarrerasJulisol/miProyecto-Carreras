import Item from "./Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemList() {
    const [prod, setProd] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    const { categoria } = useParams()
    
    useEffect(() => {
        const DATOS = "http://localhost:3001/productos"

        setCargando(true)
        fetch(DATOS)
            .then((response) => response.json())
            .then((json) => setProd(json))
            .catch((error) => console.log('Ha habido un error al buscar los datos'))
            .finally(() => setCargando(false))
            
    }, [])

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }else if(error === true) {
        return <div className="cargando-pag"><p className="estilo-cargando">Lo sentimos, ha habido un error. Intente nuevamente más tarde.</p></div>
    }
    
    
    if (categoria) {
        const prodCateg = []
        prod.forEach((producto)=> {
            if ( producto.categoria === categoria){
                prodCateg.push(producto)
            }
        })
        return <div className="contenedor-list">
            {prodCateg.map((producto) => {
                return <Item key={producto.id} producto={producto} />})}
            </div>
        }else{
        return <div className="contenedor-list">
            {prod.map((producto) => {
                return <Item key={producto.id} producto={producto} />})}
        </div>
    }

}

export default ItemList