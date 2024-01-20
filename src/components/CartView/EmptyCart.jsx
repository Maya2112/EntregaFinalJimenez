import { Link } from "react-router-dom";
import Boton from "../CartWidget/Boton";


const EmtpyCart = () => {

    return (
    <section className="flex justify-center items-center flex-col bg-violet-500 h-screen">
        <h2 className="text-4xl font-semibold">Tu carrito está vacío</h2>
        <hr />
        <p>Agrega algún producto a tu carrito</p>
        <Boton className="hover:bg-violet-800 border-violet-800">
            <Link to={"/"}>Volver</Link>
        </Boton>
    </section>
    )
}

export default EmtpyCart