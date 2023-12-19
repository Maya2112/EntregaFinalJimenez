import Boton from "../CartWidget/Boton";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ item }) => {
    const navigate = useNavigate()

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
                <div className="flex gap-4">
                <Boton className="hover:bg-lime-400 hover:border-lime-400">Agregar al carrito</Boton>
                <Boton onClick={handleVolver} className="hover:bg-violet-800 border-violet-800">Volver</Boton>
                </div>      
                
            </div>
        </div>
        <hr/>
    </div>
    );
};

export default ItemDetail;