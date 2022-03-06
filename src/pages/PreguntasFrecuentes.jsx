import { useNavigate } from "react-router-dom"

function PreguntasFrecuentes() {
    const navigate = useNavigate()
    return (
        <div className="seccion-preg-frec">
            <div>
                <h2 className="titulos">Preguntas Frecuentes</h2>
                <div>
                    <ol>
                        <li><a href="#preg1" className="preg-list cursor">¿Cuáles son los metodos de pago?</a></li>
                        <li><a href="#preg2" className="preg-list cursor">¿Cuánto cuesta el envío?</a></li>
                        <li><a href="#preg3" className="preg-list cursor">¿Cuánto tarda el envío?</a></li>
                        <li><a href="#preg4" className="preg-list cursor">¿Cómo puedo contactar con ustedes?</a></li>
                        <li><a href="#preg5" className="preg-list cursor">¿Para realizar una compra debo estar registrado?</a></li>
                        <li><a href="#preg6" className="preg-list cursor">¿No encontraste lo que estas buscando?</a></li>
                    </ol>
                    </div>
            </div>
            <div>
                <div>
                    <h3 className="titulos" id="preg1">1. ¿Cuáles son los metodos de pago?</h3>
                    <div>Nuestros métodos de pago son Tarjetas de débito, crédito y Mercado Pago.</div>
                </div>
                <div>
                    <h3 className="titulos" id="preg2">2. ¿Cuánto cuesta el envío?</h3>
                    <div>El costo del envio está incluido en nuestros precios.</div>
                </div>
                <div>
                    <h3 className="titulos" id="preg3">3. ¿Cuánto tarda el envío?</h3>
                    <div>El envío varía según la zona, en CABA y GBA dentro de las 48hs. 
                        Hacia el interior del país puede variar entre 3 a 7 días.</div>
                </div>
                <div>
                    <h3 className="titulos" id="preg4">4. ¿Cómo puedo contactar con ustedes?</h3>
                    <div>
                        Puedes revisar nuestras redes de contacto o enviarnos un correo 
                        para que nos contactemos contigo.</div>
                    </div>
                <div>
                    <h3 className="titulos" id="preg5">5. ¿Para realizar una compra debo estar registrado?</h3>
                    <div>No, no es necesario estar registrado para hacer una compra. Lo que si es
                        necesario a la hora de realizar la compra es dejar algunos de tus datos
                        para realizar el pago del producto y para que te enviemos tu pedido.</div>
                </div>
                <div>
                    <h3 className="titulos" id="preg6">6. ¿No encontraste lo que estas buscando?</h3>
                    <div><span onClick={()=> navigate(`/ayuda/preguntar`)} className="cursor color">Dejanos
                     un mensaje</span> que te lo vamos a responder lo antes posible por correo.</div>
                </div>
            </div>
        </div>
    )
}

export default PreguntasFrecuentes