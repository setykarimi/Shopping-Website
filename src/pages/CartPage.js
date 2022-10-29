import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../Providers/CartProvider";

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
        <main className="container grid-cols-1 lg:grid-cols-4 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 grid m-auto">
            <section className="col-span-3 grid gap-4">
                {cart.map(item =>
                    <div key={item._id} className="grid grid-cols-3 gap-3 items-center bg-white p-4 rounded-md shadow-md">
                        <img src={item.image} alt={item.name} className="w-40 h-auto rounded-lg" />
                        <div className="flex flex-col text-left space-y-2">
                            <span className="font-black text-lg text-blue-500">{item.name}</span>
                            <span className="text-md font-bold">$ {item.offPrice * item.quantity}</span>
                        </div>
                        <div className="flex justify-end pr-4">
                            <button className="border border-r-0  border-blue-400 text-blue-400
                             px-2 rounded-tl-md rounded-bl-md" 
                             onClick={() => DecrementHandler(item)}>-</button>
                            <span className="block px-2 border border-r-0 border-l-0   border-blue-400 font-black text-blue-400">{item.quantity}</span>
                            <button
                            className="border border-l-0  border-blue-400 text-blue-400
                             px-2 rounded-tr-md rounded-br-md"
                             onClick={() => IncrementHandler(item)}>+</button>
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
        <section className="bg-white p-4 max-h-65 rounded-md shadow-md h-max sticky top-24">
            <h3 className="font-black text-2xl mb-4 text-blue-500">Cart summary</h3>
            <div className="mb-4">
                <h5 className="font-bold text-lg">originalTotal price</h5>
                <span>${originalTotal}</span>
            </div>

            <div className="mb-4">
                <h5 className="font-bold text-lg">cart discount</h5>
                <span>${originalTotal - total}</span>
            </div>

            <div className="mb-4">
                <h5 className="font-bold text-lg">net price</h5>
                <span>$ {total}</span>
            </div>

            <Link to='/login?redirect=checkout' className="block border-t">
                <button className="mt-2 border-2 border-blue-400 text-blue-400 tracking-widest font-bold rounded-md w-10/12 py-1 transition-all ease-out hover:bg-blue-400 hover:text-white hover:w-full">
                Go to Checkout</button>
            </Link>
        </section>
    )
}