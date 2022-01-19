import ItemCount from "./ItemCount";

function Card () {
    
    return <div className="estilo-card">
        <div>producto</div>
        <ItemCount stock={20} inicial={1} onAdd={0} />
    </div>
}

export default Card