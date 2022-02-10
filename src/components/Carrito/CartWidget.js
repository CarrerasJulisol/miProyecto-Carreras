import { useNavigate } from "react-router-dom";
import { useCarrito } from "../../context/CartContext";
import carrito from "../Imagenes/carrito.png"
import carritoCon from "../Imagenes/carritoCon.png"

function CartWidget() {
        const navigate = useNavigate()
        const {enCarro} = useCarrito()

        return <div className="ajuste-ico" onClick={()=> navigate(`/carrito`)}>
                { enCarro === 0 ? (
                <div>
                  <img src={carrito} alt="carrito" className="tam-icon" />
                </div> ) : (
                <div>
                        <img src={carritoCon} alt="carrito" className="tam-icon" />
                        <p className="cant-en-carro">{enCarro}</p>
                </div>
                 )}
        </div>
}

export default CartWidget