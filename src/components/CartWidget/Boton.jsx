
const Boton = ({onClick, children, className=""}) => {

    return (
    <button
        onClick={onClick}
        className={`retalive border-2 rounded-lg flex items-center py-1 px-2 my-4 ${className}`}>
        
        {children}
    </button>
    );
};

export default Boton;