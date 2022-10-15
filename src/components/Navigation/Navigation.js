import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import './Navigation.scss'

const Navigation = () => {
    const { cart } = useCart()

    return (
        <header className="main-nav">
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <NavLink to='/cart'>Cart
                          <span className="cart-length">{cart.length}</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup">login/signup</NavLink>
                    </li>
                </ul>
                <h2>Shopping Center</h2>
            </nav>
        </header>
    );
}

export default Navigation;