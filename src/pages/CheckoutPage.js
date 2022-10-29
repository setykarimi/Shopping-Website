import { Link } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';
import { useCart } from '../Providers/CartProvider';

const CheckoutPage = () => {
    const auth = useAuth();
    const { cart, total } = useCart();

    if (!cart.length) {
        return (
            <div>
                <Link to='/'>Go to Shopping</Link>
            </div>
        )
    }


    return (
        <>
            {
                auth ?
                    <section className="grid-cols-1 lg:grid-cols-4 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 grid m-auto">
                        <div className='col-span-3 text-left bg-white p-4 rounded-md shadow-md h-max flex flex-col space-y-2'>
                            <h2 className='font-black text-blue-400 text-2xl mb-2'>User Information</h2>
                            <p className='text-lg'><b className='tracking-wider'>Username: </b>{auth.name}</p>
                            <p className='text-lg'><b className='tracking-wider'>Email: </b>{auth.email}</p>
                            <p className='text-lg'><b className='tracking-wider'>PhoneNumber: </b>{auth.phoneNumber}</p>
                        </div>
                        <div className='bg-white p-4 rounded-md shadow-md h-max flex flex-col space-y-2 text-left sm:text-center'>
                        <h2 className='font-black text-2xl mb-3 text-blue-500'>Cart Information</h2>
                           <div className='px-0 sm:px-8'>
                            {cart && cart.map(c => {
                                return (
                                    <div className='flex justify-between mb-3'>
                                        <b className='text-lg'>{c.name} <span className='text-red-300'>*</span> {c.quantity}</b> 
                                        <span className='text-lg'>${c.quantity * c.offPrice}</span>
                                    </div>)
                            })}
                            </div>
                            <hr />
                            <span className='text-xl'><b className='font-black'>total:</b> ${total}</span>
                        </div>
                    </section>
                    :
                    <Link to='/login'>Please login!</Link>
            }
        </>
    );
}

export default CheckoutPage;