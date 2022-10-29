import { Link } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { useCart } from '../Providers/CartProvider';

const CheckoutPage = () => {
    const auth = useAuth();
    const { cart, total } = useCart();

    if (!cart.length) {
        return <div>
            <Link to='/'>Go to Shopping</Link>
        </div>
    }
    return (
        <div className='container'>
            {auth ?
                <section>
                    <div>
                        <p>{auth.name}</p>
                        <p>{auth.email}</p>
                        <p>{auth.phoneNumber}</p>
                    </div>
                    {cart && cart.map(c => {
                        return (
                            <div>
                                {c.name} * {c.quantity}: {c.quantity * c.offPrice}
                            </div>
                        )
                    })}
                    <hr/>
                    <span>total: {total}</span>
                </section>
                :
                <Link to='/login'>Please login!</Link>}
        </div>
    );
}

export default CheckoutPage;