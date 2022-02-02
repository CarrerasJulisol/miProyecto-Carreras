import { useParams } from "react-router-dom"

function Filtro() {
    const { categoria } = useParams()

    return <div>
        <p>{categoria}</p>
    </div>
}

export default Filtro