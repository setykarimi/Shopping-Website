import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Providers/AuthProvider';
import ProjectRoutes from './routes/routes';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <CartProvider>
          <Layout>
           <ProjectRoutes />
          </Layout>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
