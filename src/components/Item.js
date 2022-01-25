import ItemCount from "./ItemCount"

function Item({producto}) {


    return <div className="estilo-card">
        <h2 className="nombre-prod">{producto.nombre}</h2>
        <img className="tam-prod" src={producto.imgURL} alt={producto.nombre}/>
        <p className="precio-prod">$ {producto.precio}</p>
        <ItemCount stock={producto.stock} inicial={1} onAdd={0} />
    </div>
}

export default Item