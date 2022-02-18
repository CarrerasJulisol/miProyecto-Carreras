import Item from "./Item"
import { useEffect, useState } from "react"
import { getFirestore } from "../../firebase"
import { useParams } from "react-router-dom"

function ItemList() {
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)

    /*useEffect(() => {
        const db = getFirestore()
        const coleccionProd = db.collection('productos')
        const prueba = coleccionProd.doc()
        console.log(prueba)
        const filtro = coleccionProd.where("categoriaId", "==", "cosmetica")

        setCargando(true)
        prueba.get()
        .then((r)=> console.log(r))
        .then((r)=> console.log(r.data))
       // .then((response) => {
       //     setProducto({...response.data(), id: response.id})
       // })
        .finally(() => setCargando(false))            
    }, [])*/

    useEffect(() => {
        const db = getFirestore()
        const coleccion = db.collection("productos")
        coleccion.get()
        .then((res) => setProducto(res.docs.map((res) => ({...res.data(), id: res.id}))))
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
