import { useEffect, useState } from "react/cjs/react.development"
import { getFirestore } from "../firebase"


function MiPerfil () {
    const [user, setUser] = useState({})
    const [cargando, setCargando] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        const db = getFirestore()
        const coleccion = db.collection("usuarios")
        setCargando(true)
        const usuarioDoc = coleccion.doc("qYyvw9UR1kNyp5JKKRlz")
        usuarioDoc.get()
        .then((res)=> console.log(res.data()))
        .then((res) => setUser({...res.data()}))
        .then(()=> setCargando(false))
        .catch((err)=> setError(err))
        .then((res)=> console.log(user))
    }, [])
    
    
    return (
        <div>
            <div>
                <div>Mis datos</div>
                <div>Sorteos</div>
                <div>Cerrar Sesion</div>
            </div>
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    
    
    )
}

export default MiPerfil
