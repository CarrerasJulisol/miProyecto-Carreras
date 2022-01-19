import ItemCount from "./ItemCount"

const ModalCarrito = () => {

    function modal() {
        const modal = document.getElementById('modal')
        modal.classList.remove('visible')
    }      

    return <div className="modal-carrito" id="modal">
        <div className="estilo-modal">
            <p className="titulo-modal">Carrito</p>
            <button className="cerrar-carrito" onClick={modal}>x</button>
        </div>
        
    </div>
}

export default ModalCarrito