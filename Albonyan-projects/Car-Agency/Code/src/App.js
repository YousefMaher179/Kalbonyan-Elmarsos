import React from "react";
import "./App.css";
import Hero from "./components/Header/Hero";
import About from "./components/Layouts/About/About";
import Services from "./components/Layouts/Services/Services";
import CarsList from "./components/Layouts/Cars/CarsList";
import Model from "./components/Layouts/Models/Model";
import Testimonials from "./components/Layouts/Testimonials/Testimonials";
import CartProvider from "./Store/cart-context";
import Companies from "./components/Layouts/Companies/Companies";
import Footer from "./components/Layouts/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <Hero />
      <About />
      <Services />
      <CarsList />
      <Model />
      <Testimonials />
      <Companies />
      <Footer />
    </CartProvider>
  );
}

export default App;
