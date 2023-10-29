import { useContext, useEffect } from 'react';
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from "react-router-dom";
import Home from './pages/Home';
import Properties from './pages/Properties';
import SingleProperty from './pages/SingleProperty';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Visit from './pages/Visit';
import Sell from './pages/Sell';
import SellProperties from './pages/SellProperties';
import SingleSellProperty from './pages/SingleSellProperty';
import Error from './pages/Error';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Context } from './context/Context';

function ScrollToTopOnMount() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function App() {

  const { user } = useContext(Context);

  return (
    <Router>
      <ScrollToTopOnMount />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/sellProperties" element={<SellProperties />} />
        <Route path="/property/:propertyName" element={<SingleProperty />} />
        <Route path="/sellProperty/:propertyName" element={<SingleSellProperty />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sell" element={user ? <Sell /> : <Login />} />
        <Route path="/visit/:id" element={user ? <Visit /> : <Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
