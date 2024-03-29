import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Checkout from "../components/Checkout/Checkout";
import CartView from "../components/CartView/CartView";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () =>{
    return (
        <BrowserRouter>
        <Navbar />

        <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/servicios/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={<CartView />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/not-found" element={ <h2>Not found</h2> }/>
            <Route path="*" element={ <Navigate to={"/not-found"}/> }/>
        </Routes>
    
        <Footer/>
        </BrowserRouter>
    
    );
}

export default AppRoutes;


