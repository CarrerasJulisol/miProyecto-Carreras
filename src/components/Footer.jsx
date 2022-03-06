function Footer() {
    const ig = "https://i.ibb.co/6wYYbqz/instagram.png"
    const fb = "https://i.ibb.co/wsqZ9G5/facebook.png"
    const tw = "https://i.ibb.co/kSqSLpd/twitter.png"
    return (<>
        <footer className="estilo-footer">
            <div>
                <ol className="contenedor-redes">
                    <li><a href="https://www.instagram.com/pixeleotodo/"><img src={ig} alt="Instagram" className="icon-redes" /></a></li>
                    <li><a href="https://www.facebook.com/pixeleotodo/"><img src={fb} alt="Facebook" className="icon-redes" /></a></li>
                    <li><a href="https://www.twitter.com/pixeleotodo/"><img src={tw} alt="Twitter" className="icon-redes" /></a></li>
                </ol>
            </div>
            <div className="texto-footer">
                <span>ecommers 2022 © Todos los derechos reservados.</span>
            </div>
        </footer>
    </>)
}

export default Footer