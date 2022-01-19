import carrito from "./carrito.png";

export default function Carrito() {

        function modal() {
                const modal = document.getElementById('modal')
                modal.classList.add('visible')
        }      

        return <div className="ajuste-icon" onClick={modal}>
                <img src={carrito} alt="carrito" className="tam-icon" />
        </div>
}