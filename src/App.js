import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './Layout/Layout';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import CartProvider from './Providers/CartProvider';

function App() {
  return (
    <div className="App">
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
