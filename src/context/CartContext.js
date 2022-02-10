import { createContext, useContext, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Toastify from "toastify-js"

const CartContext = createContext([])
CartContext.displayName = "CartContext"

export default CartContext

export const CartProvider = ({children}) => {
    const [carro, setCarro] = useState([])
    const [total, setTotal] = useState(0)
    const [enCarro, setEnCarro] = useState(0)
    const [prodStock, setProdStock] = useState(0)
    const local = JSON.parse(localStorage.getItem("carro"))
    console.log(local)

    const addItem = (producto, cantidad) => {
        const newProd = {producto, cantidad}
        setCarro((prevState)=> ([...prevState, newProd]))
        setProdStock(((prev) => prev - cantidad))
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
        estaCarrito(producto)
        setTotal((prev)=> prev + producto.precio)
        localStorage.setItem("carro", JSON.stringify(carro))
    }
   
    const removeItem = (id, producto, cantidad) => {
        setCarro((prevState) => prevState.filter((element) => element.producto.id !== id))
        setTotal((prev)=> prev - producto.producto.precio)
        setProdStock(((prev) => prev + cantidad))
        setEnCarro((prev)=> prev - cantidad)
    }

    const clear = () => {
        setCarro([])
        setTotal(0)
        setEnCarro(0)
    }

    const estaCarrito = (producto) => {
        console.log(producto.id)
        const esta = carro.find(element => {
            return element.id === 3
        })
    }

    return (
    <CartContext.Provider value={{carro, addItem, removeItem, clear, estaCarrito, total, prodStock, setProdStock, enCarro}}>
        {children}
    </CartContext.Provider>
    )
}

export const useCarrito = () => useContext(CartContext)