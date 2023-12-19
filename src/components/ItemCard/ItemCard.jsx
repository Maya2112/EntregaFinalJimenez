import { Link } from "react-router-dom";
import Boton from "../CartWidget/Boton";

const ItemCard = ({item}) => {

    return (
    <article className="container flex-col w-80 border-4 rounded-lg p-5 bg-violet-300 shadow-2xl shadow-indigo-950">
        <img src={item.img} alt={item.name} className="object-cover w-full border-2 border-black" />
        <h3 className="text-2xl font-semibold text-center text-white">{item.name}</h3>
        <hr />
        <div className="h-40 content-around">
            <p className="text-justify">{item.description}</p>
            <p className="text-xl font-bold text-violet-600 ">Precio: ${item.price}</p>
        </div>
        <Boton className="bg-white hover:bg-violet-800 border-violet-800">
            <Link to={`/item/${item.id}`}>Ver más</Link>
        </Boton>
    </article>
    );
};

export default ItemCard;