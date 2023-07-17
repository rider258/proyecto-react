

const ItemDetail = ({ item }) => {
    return (

         <div className="container">
            <div className="producto-detalle">
                <img src={item.imagen} alt="item.titulo" />
                <div >
                    <h4 className="titulo">{item.titulo}</h4>
                    <p className="categoria">Categoria: {item.categoria}</p>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">Precio: {item.precio}</p>
                </div>
            </div>

        </div> 
    )
}

export default ItemDetail