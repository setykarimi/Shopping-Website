import { useCart, useCartActions } from "../Providers/CartProvider";

const CartPage = () => {
    const { cart, total } = useCart()
    const dispatch = useCartActions()

    if (!cart) {
        return (
            <main><h2>Cart is empty</h2></main>
        )
    }

    const IncrementHandler = (cartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: cartItem })
    }

    const DecrementHandler = (cartItem) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartItem })
    }

    return (
        <main className="container">
            <section>
                {cart.map(item =>
                    <div key={item.id} className="cartItem">
                        <img src={item.image} alt={item.name} />
                        <h3>Name: {item.name}</h3>
                        <h4>Price: {item.offPrice * item.quantity}</h4>
                        <div>
                            <button onClick={() => DecrementHandler(item)}>remove</button>
                            <button>{item.quantity}</button>
                            <button onClick={() => IncrementHandler(item)}>Add</button>
                        </div>
                    </div>

                )
                }
            </section>
            <CartSummary total={total}
            cart={cart} />
        </main>
    );
}

export default CartPage;

const CartSummary = ({ total,cart }) => {
    const originalTotal = cart.length 
    ? cart.reduce((acc,curr) => acc + curr.quantity * curr.price,0) : 0;  
    return (
        <section className="cart-summary">
            <h3>cart summary</h3>
            <div>
                <h5>originalTotal price</h5>
                <p>${originalTotal}</p>
            </div>

            <div>
                <h5>cart discount</h5>
                <p>${originalTotal - total}</p>
            </div>
            <hr></hr>
            <div>
                <h5>net price</h5>
                <p>${total}</p>
            </div>
        </section>
    )
}