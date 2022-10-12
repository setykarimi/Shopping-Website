import * as data from '../data';
import { useCart, useCartActions } from '../Providers/CartProvider';
import { checkInCart } from '../utils/checkInCart';
import { toast } from 'react-toastify';
import './HomePage.scss';




const HomePage = () => {
    const dispatch = useCartActions();
    const {cart} = useCart()
    const AddProductHandler = (product) => {
        toast.success(`${product.name} added to Cart!`)
        dispatch({ type: 'ADD_TO_CART', payload: product })
    }
    return (
        <main className='container'>
            <section className='products-list'>
                {data.products.map((product) =>
                    <section className='products-list__item' key={product.id}>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='products-list__item-name'>
                            <span>{product.name}</span>
                        </div>
                        <div className='products-list__item-details'>
                            <div className='products-list__item-details-price'>
                                <span>price</span>
                                <b>$ {product.price} </b>
                            </div>
                            <button onClick={() => AddProductHandler(product)}>
                                {checkInCart(cart,product) ? "In cart" : "Add to cart"}
                            </button>
                        </div>

                    </section>
                )}
            </section>
        </main>
    );
}

export default HomePage;