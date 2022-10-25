import * as data from '../data';
import { useCart, useCartActions } from '../Providers/CartProvider';
import { checkInCart } from '../utils/checkInCart';
import { toast } from 'react-toastify';
import './HomePage.scss';
import { useEffect, useState } from 'react';
import http from '../services/httpService';


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
        <main className='container'>
            <section className='products-list'>
                {products.map((productItem) =>
                    <section className='products-list__item' key={productItem._id}>
                        <div>
                            <img src={productItem.image} alt={productItem.name} />
                        </div>
                        <div className='products-list__item-name'>
                            <span>{productItem.name}</span>
                        </div>
                        <div className='products-list__item-details'>
                            <div className='products-list__item-details-price'>
                                <span>price</span>
                                <b>$ {productItem.price} </b>
                            </div>
                            <button onClick={() => AddProductHandler(productItem)}>
                                {checkInCart(cart,productItem) ? "In cart" : "Add to cart"}
                            </button>
                        </div>

                    </section>
                )}
            </section>
        </main>
    );
}

export default HomePage;