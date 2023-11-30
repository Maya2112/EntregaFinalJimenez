import icono from '../../assets/imgs/cart.png'

const CartWidgetDetails = () =>{
    let counter = 0;

    return (
        <>
        <img src={icono} alt="Cart" className='object-cover rounded-lg w-12 h-12'/>
        <p className='absolute bg-red-800 text-white rounded-full w-6 h-6'>{counter}</p>
    </>
    );
};

export default CartWidgetDetails;