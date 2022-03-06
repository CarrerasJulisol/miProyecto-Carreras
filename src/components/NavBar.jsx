import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import CartWidget from "./Carrito/CartWidget";
import logo from "./Imagenes/logo.svg"

function NavBar() {
    let navigate = useNavigate()
    ///const sesion = sessionStorage.getItem('sesion')
    //console.log("sesion")
   // console.log(sesion)

    function visibleCateg() {
        const listaCategorias = document.getElementById('list-categ')
        listaCategorias.classList.toggle('visible')
    
    }

    function visibleCuenta() {
        const listaCategorias = document.getElementById('list-cuenta')
        listaCategorias.classList.toggle('visible')
    
    }
    
    function visibleAyuda() {
        const listaCategorias = document.getElementById('list-ayuda')
        listaCategorias.classList.toggle('visible')
    
    }

    return (
        <nav className="estilo-nav">
            <div>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div>
            <Link to="/"><p style={{fontSize: 15}}>Nombre pagina</p></Link>
            </div>
            <div>
                <ol className="menu-contenedor">
                    <li className="orden-menu">
                        <p id="categorias" onClick={visibleCateg}  style={{margin: 0}}>Productos</p>
                        <ul className="estilo-categ" id='list-categ'>
                                <li className="padd" onClick={()=> navigate(`/productos`)}>Todos</li>
                                <li className="padd" onClick={()=> navigate(`/productos/categoria/cosmetica`)}>Cosmetica</li>
                                <li className="padd" onClick={()=> navigate(`/productos/categoria/limpieza`)}>Limpieza</li>
                                <li className="padd" onClick={()=> navigate(`/productos/categoria/higiene-personal`)}>Higiene personal</li>
                        </ul>
                    </li>
                    <li className="orden-menu">
                        <p id="ayuda" onClick={visibleAyuda} style={{margin: 0}}>Ayuda</p>
                        <ul className="estilo-categ" id='list-ayuda'>
                            <li className="padd" onClick={()=> navigate(`/ayuda/preguntas-frecuentes`)}>Preguntas Frecuentes</li>
                            <li className="padd" onClick={()=> navigate(`/ayuda/preguntar`)}>Quiero Preguntar</li>
                        </ul>
                    </li>
                </ol>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar