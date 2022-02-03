import { useNavigate } from "react-router-dom"

const Home = () => {
    let navigate = useNavigate()

    function verProductos() {
        navigate("/productos")
    }

    return <div className="cont-boton-prod">
        <button onClick={verProductos} className="boton-ver-prod">Ver todos los productos</button>
    </div>
}

export default Home