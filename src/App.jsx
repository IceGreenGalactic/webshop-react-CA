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
function App() {
  return (
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
            path="/SingleProductPage/:productId"
            element={
              <Layout>
                <SingleProductPage />
              </Layout>
            }
          />
          <Route
            path="/Cart"
            element={
              <Layout>
                {" "}
                <Cart />
              </Layout>
            }
          />
      
          <Route
            path="/ContactForm"
            element={
              <Layout>
                {" "}
                <ContactForm />
              </Layout>
            }
          />
          <Route
            path="/CheckoutSuccess"
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
  );
}

export default App;
