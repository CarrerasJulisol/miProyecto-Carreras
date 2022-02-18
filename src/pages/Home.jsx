import { useNavigate } from "react-router-dom"
import { getFirestore } from "../firebase"

const PROD = []

const Home = () => {
    let navigate = useNavigate()

    const db = getFirestore()
    const coleccion = db.collection("productos")
    // agregar productos a firebase
    const enFirestore = () => {
        console.log("adentro")
        PROD.forEach((prod) => {
            coleccion
            .add(prod)
            .then((res) => console.log("producto agregado. ID: ", res.id))
        })
    }

    function verProductos() {
        navigate("/productos")
    }

    return <div className="cont-boton-prod">
        <button onClick={verProductos} className="boton-ver-prod">Ver todos los productos</button>
    </div>
}

export default Home