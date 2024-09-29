import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess.jsx';
import ContactForm from './pages/Contact/Contact.jsx';
import './App.css';
import Cart from './pages/Cart/Cart.jsx';
import PageNotFound from './pages/pageNotFound/PageNotFound.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage key={location.pathname} />} />
          <Route path="/SingleProductPage/:productId" element={<SingleProductPage key={location.pathname} />} />
          <Route path="/Cart" element={<Cart key={location.pathname} />} />
          <Route path="/Checkout" element={<Checkout key={location.pathname} />} />
          <Route path="/ContactForm" element={<ContactForm key={location.pathname} />} />
          <Route path="/CheckoutSuccess" element={<CheckoutSuccess key={location.pathname} />} />
          <Route path="/PageNotFound" element={<PageNotFound key={location.pathname} />} />
          
        </Routes>
      </main>
   
      <Footer />
    </Router>
  );
}

export default App;
