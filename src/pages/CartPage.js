import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
    const { cart } = useCart()

    if (!cart) {
        return (
            <main><h2>Cart is empty</h2></main>
        )
    }

    return (
        <main className="container">
            <section>
                {cart.map(item =>
                    <div key={item.id} className="cartItem">
                        <img src={item.image} alt={item.name}/>
                        <h3>Name: {item.name}</h3>
                        <h4>Price: {item.price * item.quantity}</h4>
                        <div>
                            <button>remove</button>
                            <button>{item.quantity}</button>
                            <button>Add</button>
                        </div>
                    </div>
                  
                    )
                }
            </section>
            <section>cart summary</section>
        </main>
    );
}

export default CartPage;