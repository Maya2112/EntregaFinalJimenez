import logo from '../../assets/imgs/GVlogo.png'
import CartWidgetDetails from '../CartWidget/CartWidgetDetails'
import {NavLink, Link } from "react-router-dom";

const links = [
    {
        label: "Asesorias",
        href: "/servicios/asesorias",
    },
    {
        label: "Mentorias",
        href: "/servicios/mentorias",
    },
    {
        label: "Talleres",
        href: "/servicios/talleres",
    },
    {
        label: "MasterClass",
        href: "/servicios/masterclass",
    }
];

const NavBar = () => {

    return (
        <header className="bg-gradient-to-b from-red-500 to-violet-500 ">
            <div className="container m-auto py-3 flex justify-between items-center">
                <Link to="/"> <img src={logo} alt="Logo" className='object-cover rounded-full w-24 h-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/></Link> 

                <nav className="flex gap-4">
                {links.map((link) => (
                                    <NavLink
                                    key={link.href}
                                    to={link.href}
                                    className= 'text-black hover:text-white text-lg uppercase font-semibold'>
                                        {link.label}
                                    </NavLink>
                        ))}
                </nav>
                <CartWidgetDetails/>
            </div>
            <hr/>
        </header>
    )
}

export default NavBar;