import * as React from "react"
import { useNavigate } from "react-router-dom"
import { useCarrito } from "../../context/CartContext"

const Carrito = () => {
    const {carro, removeItem, clear, total} = useCarrito()
    const navigate = useNavigate()

    function contenidoCarro() {
        return (
            carro.map((element) => {
                return (
                    <div className="cont-prod-item" key={element.producto.id}>
                        <div>{element.producto.nombre}</div>
                        <div className="colum2">{element.cantidad}</div>
                        <div className="colum2">${element.producto.precio}</div>
                        <div className="colum2"><button className="boton-eliminar" onClick={() => removeItem(element.producto.id, element, element.cantidad)}>x</button></div>
                    </div>
                )
            })
        )}

    return (<div className="modal-carrito" id="modal">
        <div className="estilo-modal">
            <p className="titulo-modal">Carrito</p>
            <div className="cont-prod-item">
                <div>Producto</div>
                <div className="colum2">Cantidad</div>
                <div className="colum2">Precio</div>
                <div className="colum2">Eliminar</div>
            </div>
            <div className="min-tam">

                { carro.length === 0 ? <div className="ajuste">

                    <div className="no-prod">Ups, aún no tienes productos.</div>
                    <button className="no-prod-btn" onClick={()=> navigate(`/productos`)}>Volver a ver productos</button>
                
                </div> : contenidoCarro()}

            </div>
            <div className="cont-prod-item final">
                <div>Total</div>
                <div className="colum2"></div>
                <div className="colum2">${total}</div>
                <div className="colum2"><button className="vaciar-carro" onClick={clear}>Vaciar carrito</button></div>
            </div>
            <div className="">
                <button onClick={()=> navigate(`/productos`)}>Volver</button>
                <button onClick={()=> navigate(`/finalizar-compra`)}>Comprar</button>
            </div>
    </div>
    </div>)
}

export default Carrito
/* return (
                        <div key={element.producto.id}>{element.producto.nombre}</div>
                        <div>{element.cantidad}</div>
                        <div>{element.producto.precio}</div>
                        <div><button className="boton-eliminar" onClick={() => removeItem(element.producto.id)}>x</button></div>
                    )*/