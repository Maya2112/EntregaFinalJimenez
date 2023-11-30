import CartWidgetDetails from '../CartWidget/CartWidgetDetails';

const CartWidget = ({onClick}) => {

    return (
    <button
        onClick={onClick}
        className='retalive bg-pruple-950 hover:bg-purple-800 border-2 border-red-600 rounded-lg flex items-center py-1 px-2 my-4'
    >
        <CartWidgetDetails/>
    </button>
    );
};

export default CartWidget;