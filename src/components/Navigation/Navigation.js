import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";

const Navigation = () => {
    const { cart } = useCart();
    const userData = useAuth();

    return (
        <header className="bg-blue-100 mb-10">
            <nav className="container flex justify-between m-auto py-6 px-6 md:px-2">
                <ul className="hidden md:flex space-x-4 md:flex-row items-center">
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
            </nav>
        </header>
    );
}

export default Navigation;