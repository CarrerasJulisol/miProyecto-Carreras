import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getFirestore } from "../firebase"
import Item from "../components/Productos/Item"

function Filtrar(){
    const navigate = useNavigate()
    const [producto, setProducto] = useState([])
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState(null)
    const [limpieza, setLimpieza] = useState([])
    const [cosmeticos, setCosmeticos] = useState([])
    const [higienePersonal, setHigienePersonal] = useState([])
    const params = useParams()
    const [categ, setCateg] = useState()
    const [dependencia, setDependencia] = useState(null)

    useEffect(()=> {
        setCateg((params.categoria))
        console.log(categ)
        setCargando(true)
        const db = getFirestore()
        const coleccion = db.collection("productos")
        coleccion.get()
        .then((res)=> setProducto(res.docs.map((res)=> ({...res.data(), id:res.id}))))
        .then(()=> setCargando(false))
        .catch((err)=> setError(err))
    },[])

    
    useEffect(()=> {
        let stateCopy = producto.filter(element=> element.categoria === "limpieza")
        setLimpieza(stateCopy)
        let stateCopy2 = producto.filter(element=> element.categoria === "cosmetica")
        setCosmeticos(stateCopy2)
        let stateCopy3 = producto.filter(element=> element.categoria === "higiene-personal")
        setHigienePersonal(stateCopy3)
    },[producto.length])
    
    function filtro() {
        if (categ == "limpieza" ) {
            return limpieza.map((producto) => {
                return <Item key={producto.id} producto={producto} />})
        }else if(categ == "cosmetica") {
            return cosmeticos.map((producto) => {
                return <Item key={producto.id} producto={producto} />})
        }else if(categ == "higiene-personal") {
            return higienePersonal.map((producto) => {
                return <Item key={producto.id} producto={producto} />})
            }
    }

    if (cargando) {
        return <div className="cargando-pag"><p className="estilo-cargando">Cargando... espere un momento.</p></div>
    }else if(error) {
        return <div className="cargando-pag">
            <p className="estilo-cargando">Lo sentimos, ha habido un error. Intente nuevamente más tarde.</p>
            <p className="estilo-cargando">{error}</p>
        </div>
    }else{
        return (
            <>
            <div onClick={()=> navigate("/productos")} className="cursor volver-prod">🡐 Volver a ver todos los productos</div>
            <div className="contenedor-list">
                {filtro()}
            </div>
        </>)
    }
}

export default Filtrar