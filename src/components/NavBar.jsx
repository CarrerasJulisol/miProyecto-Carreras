import { Link } from "react-router-dom"
import Carrito from "./CartWidget"
import logo from "./logo.png"
import { useNavigate } from "react-router-dom"

function NavBar() {
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

    const navigate = useNavigate()
    
    return (
        <nav className="estilo-nav">
            <div className="ajuste-icon">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="ajuste-icon">
            <Link to="/"><p style={{fontSize: 15}}>Nombre pagina</p></Link>
            </div>
            <div>
                <ol className="menu-contenedor">
                    <li className="orden-menu">
                        <p id="categorias" onClick={visibleCateg} style={{margin: 0}}>Productos</p>
                            <ul className="estilo-categ" id='list-categ'>
                                <li className="padd"><Link to="/productos">Todos</Link></li>
                                <li className="padd"><Link to="/productos/categoria/cosmetica">Cosmetica</Link></li>
                                <li className="padd"><Link to="/productos/categoria/limpieza">Limpieza</Link></li>
                                <li className="padd"><Link to="/productos/categoria/higiene-personal">Higiene personal</Link></li>
                            </ul>
                    </li>
                    <li className="orden-menu">
                        <p id="mi-cuenta" onClick={visibleCuenta} style={{margin: 0}}>Mi cuenta</p>
                        <ul className="estilo-categ" id="list-cuenta">
                            <li className="padd"><Link to="/ingresar">Ingresar</Link></li>
                            <li className="padd"><Link to="/productos">Facturas</Link></li>
                            <li className="padd"><Link to="/sorteos">Sorteos</Link></li>
                            <li className="padd"><Link to="/preguntas">Preguntas</Link></li>
                        </ul>
                    </li>
                    <li className="orden-menu">
                        <p id="ayuda" onClick={visibleAyuda} style={{margin: 0}}>Ayuda</p>
                        <ul className="estilo-categ" id='list-ayuda'>
                            <li className="padd"><Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link></li>
                            <li className="padd"><Link to="/preguntar">Quiero Preguntar</Link></li>
                            <li className="padd"><Link to="/redes">Redes</Link></li>
                        </ul>
                    </li>
                </ol>
            </div>
            <Carrito />
        </nav>
    )
}

export default NavBar