const ItemCount = ({cantidad, setCantidad, stock}) => {
    function restar() {
        if ( cantidad >= 1) {
            setCantidad((prev) => prev - 1)
        }
    }

    function sumar() {
        if ( cantidad < stock) {
            setCantidad((prev) => prev + 1)
        }
    }

    return <div>
        <div className="cont-cantidad">
            <button className="restar" onClick={restar}>-</button>
            <div className="cantidad">{cantidad}</div>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
    </div>
}
export default ItemCount