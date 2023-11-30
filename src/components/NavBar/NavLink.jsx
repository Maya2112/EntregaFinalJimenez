


const NavLink = ({href, text}) => {

    return (
        <a
        className="text-white hover:text-red-600 text-lg uppercase font-semibold"
        href={href}
    >
        {text}
        </a>
    );
};

export default NavLink;