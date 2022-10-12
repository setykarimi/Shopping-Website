import Navigation from "../components/Navigation/Navigation";
import { useCart } from "../Providers/CartProvider";

const Layout = ({children}) => {
    return ( 
        <div>
           <Navigation />
            {children}
        </div>
     );
}
 
export default Layout;