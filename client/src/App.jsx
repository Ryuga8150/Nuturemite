import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import StripeSuccessPage from "./pages/StripeSuccessPage";
import StripeFailurePage from "./pages/StripeFailurePage";
import MyOrders from "./pages/MyOrders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment-success" element={<StripeSuccessPage />} />
          <Route path="/payment-failure" element={<StripeFailurePage />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </BrowserRouter>
  );
};

export default App;
