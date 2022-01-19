import { useState } from "react"

const ItemCount = ({stock, inicial, onAdd}) => {
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

    function agregar() {
        setMas(inicial)
        setCantidad(cantidad - mas)
        setEnCarrito(enCarrito + mas)
        console.log('Ahora el stock es de: ' + (cantidad - mas) )
        console.log('En el carrito hay ' + (enCarrito + mas) + ' de este producto.')
    }

    return <div>
        <div className="cont-cantidad">
            <button className="restar" onClick={restar}>-</button>
            <div className="cantidad">{mas}</div>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
            <button className="agregar" onClick={agregar}>Agregar al carrito</button>
    </div>
}
export default ItemCount