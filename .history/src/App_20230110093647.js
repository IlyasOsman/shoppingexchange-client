import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const storedToken = localStorage.getItem("token");
  return (
    <>
      {storedToken ? (
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </>
  );
}

export default App;
