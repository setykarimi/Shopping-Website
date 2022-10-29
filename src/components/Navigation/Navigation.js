import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import { BiMenuAltRight } from 'react-icons/bi'
import { useState } from "react";

const Navigation = () => {
    const { cart } = useCart();
    const userData = useAuth();
    const [show, setIsShow] = useState(false);
    const showMenuhandler = () => {
        setIsShow(prevState => !prevState)
    }

    return (
        <header className="bg-blue-100 mb-6 sticky top-0">
            <nav className="md:container md:mx-auto px-5 md:px-0 flex justify-between m-auto py-6 items-center">
                <ul className={`md:flex md:space-x-4 md:flex-row md:items-center md:relative 
                 ${show !== false ? "flex-col absolute left-0 top-20 space-x-0 space-y-5 w-52 bg-blue-200 p-3 h-screen" : "hidden "}`}>
                    <li>
                        <NavLink end to='/'
                            className={(navData) => navData.isActive ?
                                'transition ease-in-ou hover:no-underline font-black text-white hover:bg-blue-300 bg-blue-500 rounded-md px-2 py-1' :
                                "transition ease-in-ou hover:no-underline hover:bg-blue-300 rounded-md hover:text-white px-2 py-1"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'
                            className={(navData) => navData.isActive ?
                                'transition ease-in-ou hover:no-underline font-black text-white hover:bg-blue-300 bg-blue-500 rounded-md px-2 py-1 flex items-center' :
                                "transition ease-in-ou hover:no-underline hover:bg-blue-300 rounded-md hover:text-white px-2 py-1 flex items-center"}>
                            Cart
                            <span className="bg-blue-400 ml-1 px-1 rounded-full text-white block w-5 h-5 flex items-center justify-center">{cart.length}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={userData ? "/profile" : "/signup"}
                            className={(navData) => navData.isActive ?
                                'transition ease-in-ou hover:no-underline font-black text-white hover:bg-blue-300 bg-blue-500 rounded-md px-2 py-1' :
                                "transition ease-in-ou hover:no-underline hover:bg-blue-300 rounded-md hover:text-white px-2 py-1"}>
                            {userData ? "Profile" : "login/signup"}
                        </NavLink>
                    </li>
                </ul>
                <h2 className="text-2xl font-black text-blue-500 tracking-widest">Shopping Center</h2>
                <button onClick={showMenuhandler} className="block md:hidden">
                    <BiMenuAltRight className="text-2xl text-blue-500 block md:hidden" />
                </button>
            </nav>
        </header>
    );
}

export default Navigation;