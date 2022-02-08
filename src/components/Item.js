import { useNavigate } from "react-router-dom"

function Item({producto}) {
    const navigate = useNavigate()
    return <div className="estilo-card" onClick={()=> navigate(`/productos/${producto.id}`)}>
        <h2 className="nombre-prod">{producto.nombre}</h2>
        <div className="ajuste-img">
            <img className="tam-prod" src={producto.imgURL} alt={producto.nombre} />
        </div>
        <p className="precio-prod">$ {producto.precio}</p>
    </div>
}
export default Item