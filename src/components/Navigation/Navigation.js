import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import './Navigation.scss'

const Navigation = () => {
    const { cart } = useCart();
    const userData = useAuth();

    return (
        <header className="main-nav">
            <nav>
                <ul>
                    <li><NavLink end to='/' className={(navData) => navData.isActive ? 'active-link' : "" }>Home</NavLink></li>
                    <li>
                        <NavLink to='/cart' className={(navData) => navData.isActive ? 'active-link' : "" }>Cart
                          <span className="cart-length">{cart.length}</span>
                        </NavLink>
                    </li>
                    <li>
                    
                        <NavLink to={userData ? "/profile" : "/signup"} className={(navData) => navData.isActive ? 'active-link' : "" }>
                            {userData ? "Profile" : "login/signup"}
                        </NavLink>
                    </li>
                </ul>
                <h2>Shopping Center</h2>
            </nav>
        </header>
    );
}

export default Navigation;