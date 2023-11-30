import logo from '../../assets/imgs/GVlogo.png'
import CartWidget from '../CartWidget/CartWidget';
import NavLink from './NavLink'



const NavBar = () => {

    return (
        <header className="bg-purple-950">
            <div className="container m-auto py-3 flex justify-between items-center">
                <img src={logo} alt="Logo" className='object-cover rounded-full w-24 h-24'/>

                <nav className="flex gap-4">
                    <NavLink href={"#"} text={"Asesorias"}/>
                    <NavLink href={"#"} text={"Mentorias"}/>
                    <NavLink href={"#"} text={"Talleres"}/>
                    <NavLink href={"#"} text={"Webinars"}/>
                    <NavLink href={"#"} text={"Masterclass"}/>
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar;