import ItemCount from "./ItemCount"
import { useState } from "react"
import { useCarrito } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function ItemDetail({producto}) {
    const { addItem } = useCarrito()
    const [ cantidad, setCantidad ] = useState(0)

    const clickAdd = () => {
        addItem(producto, cantidad)
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
                            <ItemCount stock={producto.stock} cantidad={cantidad} setCantidad={setCantidad}/>
                            <button className="agregar" onClick={clickAdd}>Agregar al carrito</button>
                        </div>
                    </div>
                    
                </div>
            </div>        
        </div>
    )
}

export default ItemDetail