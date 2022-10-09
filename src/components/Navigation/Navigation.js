import { NavLink } from "react-router-dom";
import './Navigation.scss'

const Navigation = () => {
    return (
        <header className="main-nav">
            <nav>
            
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/cart'>Cart</NavLink></li>
                </ul>
                <h2>Shopping Center</h2>
            </nav>
        </header>
    );
}

export default Navigation;