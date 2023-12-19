import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import { pedirDatos } from "../../utils/utils";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [services, setServices] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        pedirDatos() // <= Promise
            .then((data) => {
                const items = categoryId 
                                ? data.filter(servs => servs.category === categoryId)
                                : data

                setServices(items)
            })
    }, [categoryId])

    return (
        <>
            {services && <ItemList services={services} />}
        </>
    );
};

export default ItemListContainer;