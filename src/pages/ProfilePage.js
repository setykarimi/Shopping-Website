import { Link } from "react-router-dom";
import { useAuth } from "../Providers/AuthProvider";
import { useCart } from '../Providers/CartProvider';

const ProfilePage = () => {
    const userData = useAuth();
    const { cart, total } = useCart();

    if (!userData) return (
        <div className='bg-red-100 py-3 rounded-md border-2 border-red-300 text-center text-lg'>
            <Link to="/login" className="font-black text-red-500">Please Login!</Link>
        </div>
    )
    return (
        <>
            {
                userData ?
                    <section className="grid-cols-1 lg:grid-cols-4 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 grid m-auto">
                        <div className='col-span-3 text-left bg-white p-4 rounded-md shadow-md h-max flex flex-col space-y-2'>
                            <h2 className='font-black text-blue-400 text-2xl mb-2'>User Information</h2>
                            <p className='text-lg'><b className='tracking-wider'>Username: </b>{userData.name}</p>
                            <p className='text-lg'><b className='tracking-wider'>Email: </b>{userData.email}</p>
                            <p className='text-lg'><b className='tracking-wider'>PhoneNumber: </b>{userData.phoneNumber}</p>
                        </div>
                        <div className='bg-white p-4 rounded-md shadow-md h-max flex flex-col space-y-2 text-left sm:text-center'>
                        <h2 className='font-black text-2xl mb-3 text-blue-500'>Cart Information</h2>
                        {cart.length !==0 ? 
                        <>
                            <div className='px-0 sm:px-8'>
                            {cart.map(c => {
                                return (
                                    <div className='flex justify-between mb-3' key={c._id}>
                                        <b className='text-lg'>{c.name} <span className='text-red-300'>*</span> {c.quantity}</b> 
                                        <span className='text-lg'>${c.quantity * c.offPrice}</span>
                                    </div>)
                            })}
                            </div>
                            <hr />
                            <span className='text-xl'><b className='font-black'>total:</b> ${total}</span>
                            </> : 
                            <div className="bg-red-100 block py-2 text-red-500 rounded-md border-red-300 border text-center">
                                <span className="w-full ">No items here yet!</span>
                                <br></br>
                                <Link to='/' className="font-black underline text-lg">Go Shopping</Link>
                            </div>}
                          
                        </div>
                    </section>
                    :
                    <Link to='/login'>Please login!</Link>
            }
        </>
    );
}

export default ProfilePage;