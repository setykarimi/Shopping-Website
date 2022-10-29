import * as data from '../data';
import { useCart, useCartActions } from '../Providers/CartProvider';
import { checkInCart } from '../utils/checkInCart';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import http from '../services/httpService';
import { FiShoppingCart } from 'react-icons/fi'


const HomePage = () => {
    const [products,setProducts] = useState()
    const dispatch = useCartActions();
    const {cart} = useCart()
    const AddProductHandler = (product) => {
        toast.success(`${product.name} added to Cart!`)
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }

    useEffect(() => {
        http.get('/product')
        .then((res) =>{
            setProducts(res.data);
        })
        .catch((err) => console.log(err))
    },[])


    if(!products){
        return (<p>loading ...</p>)
    }
    return (
        <div>
            <section className='grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
                {products.map((productItem) =>
                    <section className='bg-white p-3 shadow-lg rounded-lg' key={productItem._id}>
                        <div>
                            <img className='h-32 xl:h-40 rounded m-auto' src={productItem.image} alt={productItem.name} />
                        </div>
                        <div className='font-black text-left mt-4 text-xl pb-1 border-b border-slate-200'>
                            <span>{productItem.name}</span>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <span className='text-md text-blue-300'>price</span>
                                <b className='text-lg font-black text-blue-500'>$ {productItem.price} </b>
                            </div>
                            <button className={`text-sm flex items-center gap-2 h-7 px-2 my-auto border rounded transition ease-in-out hover:bg-blue-500 hover:text-white ${ checkInCart(cart,productItem) ? "bg-blue-500 text-white border-0" :"border-blue-300 text-blue-400" }`} onClick={() => AddProductHandler(productItem)}>
                                {checkInCart(cart,productItem) ? "In cart" : "Add to cart"}
                                {checkInCart(cart,productItem) ? "" : <FiShoppingCart /> }
                                
                            </button>
                        </div>

                    </section>
                )}
            </section>
        </div>
    );
}

export default HomePage;