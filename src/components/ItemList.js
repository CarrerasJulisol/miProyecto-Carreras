import Item from "./Item"

function ItemList() {
    const productos = [
        {
            id: 1,
            nombre: "Máscara de pestañas",
            precio: 500,
            imgURL: "https://i.ibb.co/v1nt0TK/123530906-1325078277842845-6743842196221018719-n.jpg",
            stock: 8,
        },
        {
            id: 2,
            nombre: "Kit de Cepillos",
            precio: 2480,
            imgURL: "https://i.ibb.co/Qb040yd/248926445-205524528358166-4915981980947253815-n.jpg",
            stock: 5,
        },
        {
            id: 3,
            nombre: "Desodorante natural",
            precio: 400,
            imgURL: "https://i.ibb.co/ZJJ3f9h/118397452-158103259305914-2809781037395207490-n.jpg",
            stock: 11,
        },
        {
            id: 4,
            nombre: "Shampoo y acondicionador sólido",
            precio: 700,
            imgURL: "https://i.ibb.co/b6vMvG8/118868291-1183817341986641-446069257734613276-n.jpg",
            stock: 15,
        },
        {
            id: 5,
            nombre: "Cepillo de madera",
            precio: 600,
            imgURL: "https://i.ibb.co/tqbhz5L/64312869-2435028909915111-6325920298829843945-n.jpg",
            stock: 8,
        },
        {
            id: 6,
            nombre: "Bálsamo labial",
            precio: 250,
            imgURL: "https://i.ibb.co/n02nsMj/118651013-116605716828936-3352087661918962098-n.jpg",
            stock: 6,
        },
        {
            id: 7,
            nombre: "Cepillo de dientes",
            precio: 200,
            imgURL: "https://i.ibb.co/W5JC2FM/256783025-131412589261409-855547103145768984-n.jpg",
            stock: 24,
        }
    ]

    const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout(()=> resolve(productos), 2000)
        })
    }

    getProductos()
        .then((result) => console.log(result))
        .catch(()=> console.log("Ha habido un error"))
        .finally(()=> console.log("La promesa a finalizado"))


    return <div className="contenedor-list">
        {productos.map((producto) => {
            return <Item key={producto.id} producto={producto} />})}
    </div>
}

export default ItemList