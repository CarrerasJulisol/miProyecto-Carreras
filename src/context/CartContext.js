import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Toastify from "toastify-js"

const CartContext = createContext([])
CartContext.displayName = "CartContext"

export default CartContext

export const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([])

    const addItem = (producto, cantidad) => {
        const newProd = {producto, cantidad}
        setCarro((prevState)=> ([...prevState, newProd]))
        Toastify({
            text: "Agregado " + cantidad + " al carrito!",
            duration: 3000,
            style: {
                background: "rgb(121,203,169)",
                background: "linear-gradient(0deg, rgba(69,122,88,1) 0%, rgba(121,203,169,1) 100%)"
            }
        }).showToast();
        console.log("agregado al carrito: ", newProd)
    }
   
    const removeItem = (id) => {
        setCarro((prevState) => prevState.filter((element) => element.producto.id !== id))
    }

    const clear = () => {
        setCarro([])
    }

    const estaCarrito = (producto) => {
        console.log(carro.includes(producto))
    }

    return (
    <CartContext.Provider value={{carro, addItem, removeItem, clear, estaCarrito}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCarrito = () => useContext(CartContext)