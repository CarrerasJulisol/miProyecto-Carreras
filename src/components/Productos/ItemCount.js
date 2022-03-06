const ItemCount = ({cantidad, setCantidad, prodStock, setProdStock}) => {
    function restar() {
        if ( cantidad >= 1) {
            setCantidad((prev) => prev - 1)
            setProdStock((prev) => prev + 1)
        }
    }

    function sumar() {
        if ( cantidad < prodStock) {
            setCantidad((prev) => prev + 1)
            setProdStock((prev) => prev - 1)
        }
    }

    return <div className="grid-count">
        <div className="cont-cantidad">
            <button className="restar" onClick={restar}>-</button>
            <div className="cantidad">{cantidad}</div>
            <button className="sumar" onClick={sumar}>+</button>
        </div>
    </div>
}
export default ItemCount