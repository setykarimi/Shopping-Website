import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
    const { cart } = useCart()
    
    if(!cart) {
        return (
        <main><h2>Cart is empty</h2></main>
        )
    }

    return (
        <h2>
            {cart.map(item =>
                <div key={item.id}><h3>{item.name}</h3></div>)
                }
        </h2>
    );
}

export default CartPage;