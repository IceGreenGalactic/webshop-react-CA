import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';
import Counter from './pages/Cart/Counter.jsx';


import './App.css';
import Cart from './pages/Cart/Cart.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SingleProductPage/:productId" element={<SingleProductPage />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
      </main>
   
      <Footer />
    </Router>
  );
}

export default App;
