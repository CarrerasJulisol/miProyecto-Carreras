import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../context/CartContext"

const ModalCarrito = () => {
    const {carro, removeItem, clear} = useCarrito()
    const navigate = useNavigate()

    return <div className="modal-carrito" id="modal">
        <div className="estilo-modal">
            <p className="titulo-modal">Carrito</p>
            {carro.map((element) => {
            return (
            <div className="cont-prod-item" key={element.producto.id}>
                <p>{element.producto.nombre}</p>
                <div className="cant-eliminar">
                    <p>{element.cantidad}</p>
                    <button className="boton-eliminar" onClick={() => removeItem(element.producto.id)}>x</button>
                </div>
            </div>
            );
        })}
        <div className="cont-vaciar">
            <button className="vaciar-carro" onClick={clear}>Vaciar carrito</button>
        </div>
        </div>
        
    </div>
}

export default ModalCarrito