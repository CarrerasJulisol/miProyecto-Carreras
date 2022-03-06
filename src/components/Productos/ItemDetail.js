import ItemCount from "./ItemCount"
import { useCarrito } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

function ItemDetail({producto}) {
    const { addItem, prodStock, setProdStock, cantidad, setCantidad } = useCarrito()
    const navigate = useNavigate()
    setProdStock(producto.stock)

    const clickAdd = () => {
        addItem(producto, cantidad, setCantidad)
        setCantidad(0)
    }

    return (
        <div className="modal-prod">
            <div className="contenedor-detalles">
                <div className="imag-modal">
                    <img className="tam-prod" src={producto.imgURL} alt={producto.nombre}/> 
                </div>
                <div className="grid-detalle">
                    <h2 className="prod-modal">{producto.nombre}</h2>
                    <div className="desc-modal">{producto.descripcion}</div>
                    <div className="cont-count">
                        <div className="cont-precio">
                            <p className="estilo-precio">precio</p>
                            <p className="precio-modal">$ {producto.precio}</p>
                        </div>
                        <ItemCount prodStock={prodStock} cantidad={cantidad} setCantidad={setCantidad} setProdStock={setProdStock} />
                        <button className="botones" onClick={clickAdd}>Agregar al carrito</button>
                        <button className="botones" onClick={()=> navigate(`/carrito`)}>Terminar compra</button>
                        <button className="botones" onClick={()=> navigate(`/productos`)}>Volver</button>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default ItemDetail

