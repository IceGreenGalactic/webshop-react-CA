import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage.jsx";
import CheckoutSuccess from "./pages/Checkout/CheckoutSuccess.jsx";
import ContactForm from "./pages/Contact/Contact.jsx";
import "./App.css";
import Cart from "./pages/Cart/Cart.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
    <Router>
      <main>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />{" "}
              </Layout>
            }
          />
          <Route
            path="/product/:id"
            element={
              <Layout>
                <SingleProductPage />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                {" "}
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                {" "}
                <ContactForm />
              </Layout>
            }
          />
          <Route
            path="/checkout-success"
            element={
              <Layout>
                {" "}
                <CheckoutSuccess />
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                {" "}
                <PageNotFound />{" "}
              </Layout>
            }
          />
        </Routes>
      </main>
    </Router>
    </HelmetProvider>
  );
}

export default App;
