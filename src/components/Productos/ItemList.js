import Item from "./Item"
import { useEffect, useState } from "react"
import { useCarrito } from "../../context/CartContext"

function ItemList() {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const DATOS = "http://localhost:3001/productos"
        setCargando(true)
        fetch(DATOS)
            .then((response) => response.json())
            .then((json) => setProducto(json))
            .catch((err) =>  setError(err))
            .finally(() => setCargando(false))
            
    }, [])

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }else if(error) {
        return <div className="cargando-pag"><p className="estilo-cargando">Lo sentimos, ha habido un error. Intente nuevamente más tarde.</p></div>
    }else{
        return (
        <div className="contenedor-list">
            {producto.map((producto) => {
                return <Item key={producto.id} producto={producto} />})}
        </div>)
    }

}

export default ItemList

// if (categoria) {
//     console.log(categoria)
//     const prodCateg = []
//     prod.forEach((producto)=> {
//         if ( producto.categoria === categoria){
//             prodCateg.push(producto)
//         }
//     })
//     return (
//     <div className="contenedor-list">
//     {prodCateg.map((producto) => {
//         console.log(carrito)
//         return <Item key={producto.id} producto={producto} />})}
//     </div>)
