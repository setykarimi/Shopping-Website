import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Layout>
        <CartProvider>
          <Routes>
            <Route path='/' element=<HomePage /> />
            <Route path='/cart' element=<CartPage /> />
          </Routes>
        </CartProvider>
      </Layout>
    </div>
  );
}

export default App;
