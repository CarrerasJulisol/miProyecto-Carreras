import { useNavigate } from "react-router-dom"
import { getFirestore } from "../firebase"
import cajaMes from "../components/Imagenes/caja-mes.png"
import categoIMG from "../components/Imagenes/categoria.jpg"

const PROD = []

const Home = () => {
    const IMGlimpieza = "https://i.ibb.co/J7fyFNB/categoria-limpieza.png"
    const IMGcometica = "https://i.ibb.co/DwXyybD/categoria-cosmetica.png"
    const IMGhigiene = "https://i.ibb.co/MCJTrQG/categoria-higiene-personal.png"
    const IMGtodos ="https://i.ibb.co/rw1dPN9/categoria-todos.png"
    let navigate = useNavigate()
//<img src={cajaMes} alt="" className="tv" />
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

    function verCaja() {
        navigate("/caja-mes")
    }

    return <div className="grid-home">
        <div className="caja-mes"></div>   
            <div className="posicion-boton-caja">
                <button className="botones cursor" onClick={()=> navigate("/productos")}>Ver productos</button>
            </div>
            <h3 className="titulo-categ">Nuestras categorias</h3>
            <div onClick={() => navigate(`productos/categoria/higiene-personal`)} className="posicion-img-categ img-categorias"><img src={IMGhigiene} alt="Higiene Personal" className="tam-img-categ"/></div>
            <div onClick={() => navigate(`productos/categoria/cosmetica`)} className="img-categorias" ><img src={IMGcometica} alt="Cosmetica" className="tam-img-categ" /></div>
            <div onClick={() => navigate(`productos/categoria/limpieza`)} className="img-categorias" ><img src={IMGlimpieza} alt="Limpieza" className="tam-img-categ" /></div>
            <div onClick={() => navigate(`productos/categoria/productos`)} className="img-categorias" ><img src={IMGtodos} alt="Ver todo" className="tam-img-categ" /></div>
       
    </div>
}

export default Home