import { NavLink } from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
    return (
        <header className="main-nav">
            <nav>
            <h2>Shopping</h2>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/cart'>Cart</NavLink></li>
                </ul>
                
            </nav>
        </header>
    );
}

export default Navigation;