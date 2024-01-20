import Boton from "../CartWidget/Boton";
import { useContext, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import DateSelector from "./DateSelector"


const ItemDetail = ({ item }) => {
    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(1)
    const { addToCart, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
    const itemToCart = {
        ...item,
        cantidad,
    }
    setCantidad(cantidad + 1)
    addToCart(itemToCart)
}

    const handleVolver = () => {
        navigate(-1)
    }

    return (
    <div className="container max-w-full bg-violet-500 ">
        <h3 className="text-2xl font-semibold p-5">{item.name}</h3>
        <hr />
        <div className="flex gap-8 p-8 items-center">
            <img src={item.img} alt={item.name} className="w-2/4"/>

            <div>
                <p>{item.description}</p>
                <p className="text-xl font-bold text-white">Precio: ${item.price}</p>  
                <div className="flex w-auto gap-4 items-center">
                    {
                        isInCart( item.id )
                        ? <Boton><Link to="/cart">Terminar mi compra</Link></Boton>
                        :<>
                            <DateSelector/>
                            <Boton onClick={handleAgregar}>Agregar al carrito</Boton>
                        </>
                    }
                    <Boton onClick={handleVolver} className="hover:bg-violet-800 border-violet-800">Volver</Boton>
                </div>      
            </div>
        </div>
        <hr/>
    </div>
    );
};

export default ItemDetail