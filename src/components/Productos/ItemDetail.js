import ItemCount from "./ItemCount"
import { useState } from "react"
import { useCarrito } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

function ItemDetail({producto}) {
    const { addItem, prodStock, setProdStock } = useCarrito()
    const [ cantidad, setCantidad ] = useState(0)
    const navigate = useNavigate()
    setProdStock(producto.stock)
    console.log(prodStock)

    const clickAdd = () => {
        addItem(producto, cantidad, prodStock)
        setCantidad(0)
    }

    return (
        <div className="modal-prod">
            <div className="contenedor-detalles">
                <div className="imag-modal">
                    <img className="tam-prod" src={producto.imgURL} alt={producto.nombre}/> 
                </div>
                <div>
                    <div>
                        <h2 className="prod-modal">{producto.nombre}</h2>
                    </div>
                    <p className="desc-modal">{producto.descripcion}</p>
                    <div>
                        <div className="cont-precio">
                            <p className="precio-modal">$ {producto.precio}</p>
                        </div>
                        <div className="cont-count">
                            <ItemCount prodStock={prodStock} cantidad={cantidad} setCantidad={setCantidad}/>
                            <button className="agregar" onClick={clickAdd}>Agregar al carrito</button>
                            <button className="agregar" onClick={()=> navigate(`/carrito`)}>Terminar compra</button>
                            <button className="agregar" onClick={()=> navigate(`/productos`)}>Volver</button>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </div>
    )
}

export default ItemDetail