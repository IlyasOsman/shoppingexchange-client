import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Carts from "./components/UI/cart/Carts";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";

function App() {
  const [loggedUsername, setLoggedUsername] = useState("");
  const [loggedEmail, setLoggedEmail] = useState("");
  const API = "http://localhost:3000";

  useEffect(() => {
    fetch(`${API}/api/v1/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoggedUsername(data.user.username);
        setLoggedEmail(data.user.email);
      });
  }, []);
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const storedToken = localStorage.getItem("token");
  return (
    <>
      {storedToken ? (
        <Header loggedUsername={loggedUsername} />
        
        {showCart && <Carts />}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
