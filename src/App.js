import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <Layout>
        <Routes>
          <Route path='/' element=<HomePage /> />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
