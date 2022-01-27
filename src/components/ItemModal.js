import ItemCount from "./ItemCount"

function ItemModal({prod}) {
    function modal() {
         const modal = document.getElementById(prod.id)
         modal.classList.remove('visible')
    }      
    
    return <div className="modal-prod" id={prod.id}>
        <div className="contenedor-detalles">
            <h2 className="prod-modal">{prod.nombre}</h2>
        <div className="imag-modal">
           <img className="tam-prod" src={prod.imgURL} alt={prod.nombre}/> 
        </div>
        <p className="precio-modal">$ {prod.precio}</p>
        <p className="desc-modal">{prod.descripcion}</p>
        <ItemCount stock={prod.stock} inicial={0} onAdd={0} />
        <button className="cerrar-prod" onClick={modal} id={prod.id}>x</button>
        </div>        
    </div>
}

export default ItemModal