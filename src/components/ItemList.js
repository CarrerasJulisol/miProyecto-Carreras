import Item from "./Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ItemList() {
    const [prod, setProd] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)
    const [carrito, setCarrito] = useState([])
    const { categoria } = useParams()

    // function Contador() {
    //     //sumar todos los productouctos no importa cual es
    //     console.log(carrito)
    //     console.log(1)
    //     setCarrito((prevCarrito)=> [...prevCarrito, 5])
    //     console.log(carrito)
    // }

    useEffect(() => {
        const DATOS = "http://localhost:3001/productos"

        setCargando(true)
        fetch(DATOS)
            .then((response) => response.json())
            .then((json) => setProd(json))
            .catch((err) =>  setError(err))
            .finally(() => setCargando(false))
            
    }, [])

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }else if(error) {
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
                function Contador() {
                    //sumar todos los productos no importa cual es
                    console.log(carrito)
                    console.log(producto)
                    setCarrito((prevCarrito)=> [...prevCarrito, producto])
                }
                console.log(carrito)
                return <Item key={producto.id} producto={producto} contador={Contador} />})}
            </div>
        }else{
        return <div className="contenedor-list">
            {prod.map((producto) => {
                function Contador() {
                    //sumar todos los productouctos no importa cual es
                    console.log(carrito)
                    console.log(producto)
                    setCarrito((prevCarrito)=> [...prevCarrito, producto])
                    console.log(carrito)
                  }
                return <Item key={producto.id} producto={producto} contador={Contador} />})}
        </div>
    }

}

export default ItemList