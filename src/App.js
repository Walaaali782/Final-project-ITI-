import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/1-header/Header";
import './App.css';

import Product from "./components/3-product/Product";
import About from './components/4-About/About';
import Foooter from './components/5-Foooter/Foooter';

import Contact from './components/7-Contact/Contact';
import ContactLIst from './components/7-Contact/ContactLIst';
import ProductDetails from './components/8-ProductDetails/ProductDetails';
import Register from './components/Register';
import SellerDashboard from './components/SellerDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Register />
        </>} />
    
        <Route path="/login" element={<>
          <Login/>
        </>} />
    

        <Route
            path="/product"
            element={
              <ProtectedRoute requiredRole="customer">
                <Product/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="seller">
               <SellerDashboard/>
              </ProtectedRoute>
            }
          />






        <Route path="/About" element={<>
          <About />
        </>} />
    
        <Route path="/Contact" element={<>
          <Contact />
          <ContactLIst/>
        </>} />


        <Route path="product/:productId" element={<>
          <ProductDetails />
        </>} />



      </Routes>

      <Foooter/>
    </div>
  );
}

export default App;
