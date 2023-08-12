import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("")

    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: totalCarrito()
        }
        console.log(pedido);

        const pedidoRef = collection(db, "pedidos");

        addDoc(pedidoRef, pedido)
            .then((doc) => {
               setPedidoId(doc.id);
               vaciarCarrito();
            })
    }

    if(pedidoId) {

        return (
        <div className="container">
            <h1 className="main-title">Muchas gracias por conmprar en 3DShop</h1>
            <p>Tu numero de pedido es: {pedidoId}</p>
        </div>
        )
    }



    return (
        <div className='container'>
            <h1 className="main-title">Finalizar compra</h1>

            <form className='formulario' onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
                <input type="email" placeholder='Ingresa tu e-mail' {...register("email")} />
                <input type="text" placeholder='Ingresa tu teléfono' {...register("telefono")} />
                <button className='enviar' type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default CheckOut