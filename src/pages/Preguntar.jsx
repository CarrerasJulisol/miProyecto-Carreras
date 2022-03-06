import { useState } from "react"
import firebase from "firebase"
import 'firebase/firestore'
import { getFirestore } from "../firebase"
import { useNavigate } from "react-router-dom"
import insta from '../components/Imagenes/instagram.png'
import facebook from '../components/Imagenes/facebook.png'
import twitter from '../components/Imagenes/twitter.png'

function Preguntar() {
    const [NombrePreg, setNombrePreg] = useState()
    const [MailPreg, setMailPreg] = useState()
    const [Pregunta, setPregunta] = useState()
    const [ok, setOk ] = useState(0)
    const navigate = useNavigate()


    function enviarPreg(event) {
        event.preventDefault()
              if (!NombrePreg || !MailPreg || !Pregunta) {
                setOk("no")
        }else{
            setOk("si")
        }

    }
    function preguntaEnviada() {
        const nuevaPregunta = {
            Nombre: NombrePreg,
            Correo: MailPreg,
            Pregunta: Pregunta,
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
        }
    
        const db = getFirestore()
        db.collection("preguntas").add(nuevaPregunta)
        console.log("pregunta enviada")
        return (
            <div className="modal-no-hay">
                <div className="estilo-no-hay">
                <h3>¡Tu mensaje a sido enviado!</h3>
                <p>Pronto nos contactaremos contigo. Estate atento a tu correo!</p>
                <button onClick={()=> {
                    setOk(0)
                    navigate(`/`)
                    }}>Genial</button> 
                </div>
            </div>
        )
    }
    
    function datosPersona() {
        return <>
            <h3>Ups, no ingresaste todos tus datos.</h3>
            <p>Por favor vuelve e ingresa todos tus datos para continuar.</p>
            <button onClick={()=> setOk(0)}>Completar datos</button> 
        </>
    }

    function faltaPreg() {
        return <>
            <h3>No escribiste un mensaje o pregunta</h3>
            <p>Por favor vuelve y escribe tu mensaje o pregunta.</p>
            <button onClick={()=> setOk(0)}>Completar datos</button> 
        </>
    }

    function condicion(){
        if(!NombrePreg || !MailPreg) {
            return datosPersona()
        }else if(!Pregunta){
            return faltaPreg()
        }

    }

    function noDatos() {
        return <div className="modal-no-hay">
            <div className="estilo-no-hay">
                {condicion()}
            </div>
        </div>
    }

    return (
        <>
        <div className="seccion-preg">
            <div>
                <h3 className="titulos">Contactate con nosotros</h3>
                <div>Si tenes alguna consulta completá el siguiente formulario. Te vamos a contactar lo antes posible.</div>
                <div>Recuerda que también puedes leer las <span className="cursor color" onClick={()=> navigate(`/ayuda/preguntas-frecuentes`)}>preguntas Frecuentes</span></div>
                <div className="contenedor-form">
                    <form onSubmit={enviarPreg} className="formulario">
                        <label htmlFor="NombrePreg">Nombre</label>
                        <input type="text" id="nombre" name="NombrePreg" value={NombrePreg} onChange={(e) => setNombrePreg(e.target.value)}></input>

                        <label htmlFor="MailPreg" className="form-position">Correo electronico</label>
                        <input type="email" id="mail" name="MailPreg" value={MailPreg} onChange={(e) => setMailPreg(e.target.value)}></input>

                        <label htmlFor="Pregunta">Mensaje</label>
                        <textarea type="text" id="pregunta" name="pregunta" placeholder="Escriba su mensaje o pregunta aquí" className="estilo-textarea" value={Pregunta} onChange={(e) => setPregunta(e.target.value)}></textarea>
                        
                        <input type="submit" value="Preguntar" className="fin-position botones"/>
                    </form>
                </div>
            </div>
            <div>
                <p>También podes encontrarnos y contactarnos a través de nuestras redes.</p>
                <div className="posicion-cards-redes">
                    <div className="tarjetas">
                        <a href="https://www.facebook.com" className="redes">
                            <div class="redes">
                                <img src={facebook} alt="Facebook" class="tam-img" />
                                <p>Facebook</p>
                            </div>
                        </a>
                    </div>
                    <div className="tarjetas">
                        <a href="https://www.Instagram.com" className="redes">
                            <div class="redes">
                                <img src={insta} alt="Instagram" class="tam-img" />
                                <p>Instagram</p>
                            </div>
                        </a>
                    </div>
                    <div className="tarjetas">
                        <a href="https://www.twitter.com" className="redes">
                            <div class="redes">
                                <img src={twitter} alt="Twitter" class="tam-img" />
                                <p>Twitter</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>{ ok === "si" ? preguntaEnviada() : ok === "no" ? noDatos() : null }</div>
        </div>
        </>
    )
}

export default Preguntar