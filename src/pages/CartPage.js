import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../Providers/CartProvider";
import './CartPage.scss';

const CartPage = () => {
    const { cart, total } = useCart()
    const dispatch = useCartActions()

    const IncrementHandler = (cartItem) => {
        dispatch({ type: "ADD_TO_CART", payload: cartItem })
    }

    const DecrementHandler = (cartItem) => {
        dispatch({ type: "REMOVE_PRODUCT", payload: cartItem })
    }
    if (cart.length == 0) {
        return <main>Cart is empty</main>
    }

    return (
        <main className="container cart-page m-auto">
            <section>
                {cart.map(item =>
                    <div key={item._id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-item__img" />
                        <span className="cart-item__name">{item.name}</span>
                        <span className="cart-item__price">$ {item.offPrice * item.quantity}</span>
                        <div className="cart-item__buttons">
                            <button onClick={() => DecrementHandler(item)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => IncrementHandler(item)}>+</button>
                        </div>
                    </div>
                )}
            </section>
            <CartSummary total={total} cart={cart} />
        </main>
    );
}

export default CartPage;

const CartSummary = ({ total, cart }) => {
    const originalTotal = cart.length
        ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0) : 0;
    return (
        <section className="cart-summary">
            <h3>cart summary</h3>
            <div>
                <h5 className="cart-summary__title">originalTotal price</h5>
                <span className="cart-summary__price">${originalTotal}</span>
            </div>

            <div>
                <h5 className="cart-summary__title">cart discount</h5>
                <span className="cart-summary__price">${originalTotal - total}</span>
            </div>

            <div>
                <h5 className="cart-summary__title">net price</h5>
                <span className="cart-summary__price">$ {total}</span>
            </div>

            <Link to='/login?redirect=checkout' style={{ width: '100%', display: 'block', borderTop: '1px solid #eee', marginTop: "1em" }}>
                <button className="btn-orange" style={{ width: '100%', marginTop: '.5em' }}>Go to Checkout</button>
            </Link>
        </section>
    )
}