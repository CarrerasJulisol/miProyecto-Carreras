import { createContext, useContext, useEffect } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useState } from "react/cjs/react.development";
import Toastify from "toastify-js"

const CartContext = createContext([])
CartContext.displayName = "CartContext"

export default CartContext

export const CartProvider = ({children}) => {
    // array de productos en carrito
    const [carro, setCarro] = useState([])
    // cantidad
    const [cantidad, setCantidad ] = useState(0)
    const [actualCantidad, setActualCantidad ] = useState(0)
    // array del precio total de la compra
    const [total, setTotal] = useState(0)
    // array de cantidad de productos total en el carro
    const [enCarro, setEnCarro] = useState(0)
    // array de stock de cada producto (usar firestore)
    const [prodStock, setProdStock] = useState(0)
    // array de ID que da firestore de la compra
    const [ordenID, setOrdenID] = useState("")
    const local = JSON.parse(localStorage.getItem("carro"))
    // esta este producto en el carrito?
    const [preg, setPreg] = useState(null)
    let nuevaCantidad= 0

    const addItem = (producto, cantidad) => {
        const newProd = {producto, cantidad}
        setCarro((prevState)=> ([...prevState, newProd]))
        if (cantidad != 0) {
            Toastify({
                text: "Agregado " + cantidad + " al carrito!",
                duration: 3000,
                style: {
                    background: "rgb(121,203,169)",
                    background: "linear-gradient(0deg, rgba(69,122,88,1) 0%, rgba(121,203,169,1) 100%)"
                }
            }).showToast()
            setEnCarro((prev)=> prev + cantidad)
        }
        console.log("agregado al carrito: ", newProd)
        setTotal((prev)=> prev + (producto.precio * cantidad))
        localStorage.setItem("carro", JSON.stringify(carro))
        //esta este producto en el carrito?
        setPreg(carro.find((e)=> e.producto.nombre === producto.nombre))
    }

    const removeItem = (id, producto, cantidad) => {
        let resp = false
        console.log(preg)
        if (preg) {
            resp = true
        }
        if(resp === true){
            nuevaCantidad = preg.cantidad + cantidad
            console.log(nuevaCantidad)
        }
        setEnCarro((prev)=> prev - cantidad)
        setCarro((prevState) => prevState.filter((element) => element.producto.id !== id))
        setTotal((prev)=> prev - (producto.producto.precio * cantidad))
        setProdStock(((prev) => prev + cantidad))
    }

    const clear = () => {
        setCarro([])
        setTotal(0)
        setEnCarro(0)
    }

    return (
    <CartContext.Provider value={{carro, setCarro, addItem, removeItem, clear, total, prodStock, setProdStock,
    enCarro, setEnCarro, setOrdenID, ordenID, actualCantidad, cantidad, setCantidad}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCarrito = () => useContext(CartContext)