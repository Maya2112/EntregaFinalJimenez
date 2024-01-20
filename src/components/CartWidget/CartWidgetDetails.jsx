import icono from '../../assets/imgs/cart.png';
import { Link } from 'react-router-dom';
import Boton from './Boton';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidgetDetails = () =>{

    const { itemsInCart } = useContext(CartContext)


    return (
        <Boton className="relative flex bg-white hover:bg-slate-400 border-red-400">
            <Link to="/cart" >
                <img src={icono} alt="Cart" className='object-cover rounded-lg w-12 h-12'/>
                <p className='absolute top-0 right-0 bg-red-800 text-white rounded-full w-6 h-6'>{ itemsInCart() }</p>
            </Link>
        </Boton>
    );
};

export default CartWidgetDetails;