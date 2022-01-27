import ItemCount from "./ItemCount"
import ItemModal from "./ItemModal"

function Item({producto}) {
    function abrirItem() {
        const item = document.getElementById(producto.id)
        item.classList.add('visible')
   }

    return <div className="estilo-card">
        <h2 className="nombre-prod">{producto.nombre}</h2>
        <div className="ajuste-img">
            <img className="tam-prod" src={producto.imgURL} alt={producto.nombre} onClick={abrirItem} />
        </div>
        <p className="precio-prod">$ {producto.precio}</p>
        <ItemCount stock={producto.stock} inicial={0} onAdd={0} />
        <ItemModal prod={producto} />
    </div>
}
export default Item