import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';


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
            <Route path='/login' element=<LoginPage /> />
            <Route path='/signup' element=<SignupPage /> />
          </Routes>
      </Layout>
      </CartProvider>
    </div>
  );
}

export default App;
