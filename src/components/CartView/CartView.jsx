import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { DateContext } from "../../context/DateContext";
import Boton from "../CartWidget/Boton";
import trashIcon from "../../assets/imgs/trash.svg";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CartView = () => {
    const { cart, totalCart, clearCart, removeItem } = useContext(CartContext);
    const {ShowDates} = useContext(DateContext)

    if (cart.length === 0) return <EmptyCart />

    return (
        <section className="bg-violet-500 h-full">
            <h2 className="flex justify-center items-center text-4xl font-semibold py-4">Tu Compra</h2>
            <hr />
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="flex gap-3 border-b p-5">
                        <img src={item.img} alt="Cart img" className="w-32" />
                        <div>
                            <h3 className="text-2xl">{item.name}</h3>
                            <p className="text-2xl font-bold">
                                $ {item.price * item.cantidad}
                            </p>
                            <p>Cantidad: {item.cantidad}</p>
                            <div>Fechas agendadas: {ShowDates}</div>
                            <Boton onClick={() => removeItem(item.id)}>
                                <img src={trashIcon} className="w-4" alt="trash icon" />
                            </Boton>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center items-center gap-6 bg-violet-500">
                <h4 className="text-4xl font-semibold">TOTAL: ${totalCart()}</h4>
                <Boton onClick={clearCart}>Vaciar carrito</Boton>
                <Boton><Link to="/checkout">Terminar mi compra</Link></Boton>
            </div>
        </section>
    );
};

export default CartView;