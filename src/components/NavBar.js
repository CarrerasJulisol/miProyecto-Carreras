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
    
    return (
        <nav className="estilo-nav">
            <div>
                <img src="/src/components/logo.png" alt="logo" />
            </div>
            <div><p style={{fontSize: 15}}>Nombre pagina</p></div>
            <ol className="menu-contenedor">
                <li className="orden-menu">Inicio</li>
                <li className="orden-menu">
                    <p id="categorias" onClick={visibleCateg} style={{margin: 0}}>Categorias</p>
                    <ul className="estilo-categ" id='list-categ'>
                        <li className="padd"><a href=''>Categoria 1</a></li>
                        <li className="padd"><a href=''>Categoria 2</a></li>
                        <li className="padd"><a href=''>Categoria 3</a></li>
                        <li className="padd"><a href=''>Categoria 4</a></li>
                        <li className="padd"><a href=''>Categoria 5</a></li>
                    </ul>
                    <a href=''></a>
                </li>
                <li className="orden-menu">
                    <p id="mi-cuenta" onClick={visibleCuenta} style={{margin: 0}}>Mi cuenta</p>
                    <ul className="estilo-categ" id="list-cuenta">
                        <li className="padd"><a href=''>Ingresar</a></li>
                        <li className="padd"><a href=''>Facturas</a></li>
                        <li className="padd"><a href=''>Sorteos</a></li>
                        <li className="padd"><a href=''>Preguntas</a></li>
                    </ul>
                </li>
                <li className="orden-menu">
                    <p id="ayuda" onClick={visibleAyuda} style={{margin: 0}}>Ayuda</p>
                    <ul className="estilo-categ" id='list-ayuda'>
                        <li className="padd"><a href=''>Preguntas Frecuentes</a></li>
                        <li className="padd"><a href=''>Quiero Preguntar</a></li>
                        <li className="padd"><a href=''>Redes</a></li>
                    </ul>
                </li>
            </ol>
        </nav>
    )
}

export default NavBar