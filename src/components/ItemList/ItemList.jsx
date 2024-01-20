import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";


const ItemList = ({services}) => {
    const { categoryId } = useParams()

    return (
    <section className="container max-w-full bg-violet-500">

        <h2 className="text-4xl text-center text-white font-sans font-bold p-10">{!categoryId ? "Servicios" : categoryId.toUpperCase()}</h2>

        <div className="flex flex-wrap gap-8 justify-center m-5">
            {services.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>
        <hr/>
    </section>
    );
};

export default ItemList;