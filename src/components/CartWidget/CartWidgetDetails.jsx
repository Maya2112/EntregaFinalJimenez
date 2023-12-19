import icono from '../../assets/imgs/cart.png'
import Boton from './Boton';

const CartWidgetDetails = () =>{
    let counter = 0;

    return (
        <Boton className="bg-white hover:bg-slate-400 border-red-400">
            <img src={icono} alt="Cart" className='object-cover rounded-lg w-12 h-12'/>
            <p className='absolute bg-red-800 text-white rounded-full w-6 h-6'>{counter}</p>
        </Boton>
    );
};

export default CartWidgetDetails;