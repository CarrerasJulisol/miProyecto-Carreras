import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import carrito from "./carrito.png";

export default function Carrito() {
        const navigate = useNavigate()

        return <div className="ajuste-icon" onClick={()=> navigate(`/carrito`)}>
                <img src={carrito} alt="carrito" className="tam-icon" />
        </div>
}