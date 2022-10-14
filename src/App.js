import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';


function App() {
  return (
    <div className="App">
    <ToastContainer />
    <CartProvider>
      <Layout>
          <Routes>
            <Route path='/' element=<HomePage /> />
            <Route path='/cart' element=<CartPage /> />
            <Route path='/checkout' element=<CheckoutPage /> />
          </Routes>
      </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
