import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productosRef = collection(db, 'services')
        const docsRef = categoryId
                        ? query( productosRef, where('category', '==', categoryId))
                        : productosRef
        getDocs(docsRef)
            .then((querySnapshot) => {
                const docs = querySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
            }
        })
        setServices( docs )
        })
        .finally(() => setLoading(false))
}, [categoryId])

    return (
        <>
            {loading
            ? <Loader/>
            : <ItemList services={services}/>}
        </>
    );
};

export default ItemListContainer;