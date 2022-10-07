import * as data from '../data';
import { useCartActions } from '../Providers/CartProvider';
const HomePage = () => {
    const dispatch = useCartActions() 
    const AddProductHandler =(product) => {
        dispatch({type: 'ADD_TO_CART', payload: product})
    }
    return (
        <main>
            <section className='products-list'>
                {data.products.map((product) =>
                    <section className='product-list__product' key={product.id}>
                        <div>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                            <button onClick={() => AddProductHandler(product)}>Add to cart</button>
                    </section>
                )}
            </section>
        </main>
    );
}

export default HomePage;