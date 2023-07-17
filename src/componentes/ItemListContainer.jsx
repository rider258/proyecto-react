
import ItemList from './ItemList'
import { useState, useEffect } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("Productos");
  console.log(categoria);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
          setTitulo(categoria);
        } else {
          setProductos(res);
          setTitulo('productos');
        }
      })

  }, [categoria])


  return (
    <div><ItemList productos={productos} titulo={titulo} /></div>
  )
}

export default ItemListContainer