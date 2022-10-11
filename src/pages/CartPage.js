import { useCart, useCartActions } from "../Providers/CartProvider";

const CartPage = () => {
    const { cart,total } = useCart()
    const  dispatch  = useCartActions()

    if (!cart) {
        return (
            <main><h2>Cart is empty</h2></main>
        )
    }

    const IncrementHandler = (cartItem) => {
        dispatch({type: "ADD_TO_CART", payload:cartItem})
    }

    const DecrementHandler = (cartItem) => {
        dispatch({type: "REMOVE_PRODUCT", payload:cartItem})
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
                            <button onClick={() => DecrementHandler(item)}>remove</button>
                            <button>{item.quantity}</button>
                            <button onClick={() => IncrementHandler(item)}>Add</button>
                        </div>
                    </div>
                  
                    )
                }
            </section>
            <section className="cart-summary">
                <h3>cart summary</h3>
                <h5>{total}</h5>
            </section>
        </main>
    );
}

export default CartPage;