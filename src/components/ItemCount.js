import { useState } from "react"
import Toastify from "toastify-js"

const ItemCount = ({stock, inicial, onAdd, contador}) => {
    const [mas, setMas] = useState(inicial)
    let [cantidad, setCantidad] = useState(stock)
    let [enCarrito, setEnCarrito] = useState(onAdd)
    

    function restar() {
        if ( mas >= 2) {
           setMas(mas - 1) 
        }
    }

    function sumar() {
        if ( mas < cantidad) {
            setMas(mas + 1)
        }
    }

    function Agregar() {
        setMas(inicial)
        setCantidad(cantidad - mas)
        setEnCarrito((enCarrito) + mas)
        if ( mas >= 1) {
            Toastify({
            text: "Agregado " + mas + " al carrito!",
            duration: 3000,
            style: {
                background: "rgb(121,203,169)",
                background: "linear-gradient(0deg, rgba(69,122,88,1) 0%, rgba(121,203,169,1) 100%)"
                }
                
            }).showToast();
            console.log('Ahora el stock es de: ' + (cantidad - mas) )
            console.log('Total de este productos en el carrito: ' + ((enCarrito) + mas))
        }
    }

    function DosFunc() {
        Agregar()
        contador()
    }

    return <div className="ajustar-add">
        <div className="cont-cantidad">
            <button className="restar" onClick={restar}>-</button>
            <div className="cantidad">{mas}</div>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
            <button className="agregar" onClick={DosFunc}>Agregar al carrito</button>
    </div>
}
export default ItemCount