import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess.jsx";
import ContactForm from "./pages/Contact/Contact.jsx";
import "./App.css";
import Cart from "./pages/Cart/Cart.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import Breadcrumbs from "./components/Breadcrumbs.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Breadcrumbs />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/SingleProductPage/:productId"
            element={<SingleProductPage />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/ContactForm" element={<ContactForm />} />
          <Route path="/CheckoutSuccess" element={<CheckoutSuccess />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
