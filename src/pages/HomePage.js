import * as data from '../data';
import { useCartActions } from '../Providers/CartProvider';
import './HomePage.scss'
const HomePage = () => {
    const dispatch = useCartActions()
    const AddProductHandler = (product) => {
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
                            <button onClick={() => AddProductHandler(product)}>Add to cart</button>
                        </div>

                    </section>
                )}
            </section>
        </main>
    );
}

export default HomePage;