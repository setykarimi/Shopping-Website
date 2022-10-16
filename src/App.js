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
import AuthProvider from './Providers/AuthProvider';
import ProfilePage from './pages/ProfilePage';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <CartProvider>
          <Layout>
            <Routes>
              <Route path='/' element=<HomePage /> />
              <Route path='/cart' element=<CartPage /> />
              <Route path='/checkout' element=<CheckoutPage /> />
              <Route path='/login' element=<LoginPage /> />
              <Route path='/signup' element=<SignupPage /> />
              <Route path='/profile' element=<ProfilePage /> />
            </Routes>
          </Layout>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
