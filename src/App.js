import { isLoginContext } from "./loginContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Navbar/Layout";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Login-sigup-pages/Register";
import Login from "./components/Login-sigup-pages/Login";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import { ProductDetails } from "./components/product details/productDetails";
// import { ContactUs } from "./components/Contact us/ContactUs";
import ContactUs from "./components/Contact us/ContactUs";
import { AboutUs } from "./components/About Us/AboutUs";
import Cart from "../src/components/cart/Cart";
import { createContext, useState, useEffect } from "react";

import Search from "./components/Search/Search";
import { PhoneNumberProvider } from "./components/Checkout/PhoneNumberContext";
import Review from "./components/Checkout/Review";
import Checkout from "./components/Checkout/Checkout";
import BookSection from "./components/LandingPage/bookSection";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const ItemContext = createContext([]);
export const counterContext = createContext([]);

function App() {
  const [counter, setCounter] = useState(0);
  const [isLogin, setIsLogin] = useState(false);

  const [item, setItem] = useState([]);
  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      <isLoginContext.Provider value={{ isLogin, setIsLogin }}>
        <Router>
          <ScrollToTop />{" "}
          {/* Add this line to scroll to the top on route change */}
          <PhoneNumberProvider>
            <Layout>
              <ItemContext.Provider value={{ item, setItem }}>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/productsPage" element={<ProductsPage />}>
                    <Route path="/productsPage/:category" element={<ProductsPage />} />
                  </Route>
                  <Route path="cartPage" element={<Cart />} />
                  <Route path="aboutAsPage" element={<AboutUs />} />
                  <Route path="contactUsPage" element={<ContactUs />} />
                  <Route path="/ProductDetailsPage" element={<ProductDetails />} />
                  {/* <Route path="SearchBar" element={<Search/>}/> */}
                  <Route path="SearchPage" element={<Search />} />
                  {/* <Route path="cartPage" element={<Cart />} /> */}
                  <Route path="/CheckoutPage" element={<Checkout />} />
                  <Route path="BookSection" element={<BookSection />} />
                </Routes>
              </ItemContext.Provider>
            </Layout>
          </PhoneNumberProvider>
        </Router>
      </isLoginContext.Provider>
    </counterContext.Provider>
  );
}

export default App;
