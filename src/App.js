import Header from "./components/Header";
import Content from "./components/Content-s2";
import WhoMakes from "./components/WhoMakes";
import OurPartner from "./components/OurPartner";
import Footer from "./components/Footer";
import React, { useState } from "react";
import InstagramSlides from './components/InstagramSlides'



function App() {
  const [cartItems, setCartItems] = useState(0);

  const onAdd = () => setCartItems(cartItems + 1);

  return (
    <>
       <Header cartItems={cartItems} />
       <Content onAdd={onAdd} />
       <WhoMakes />
      <OurPartner />
      <InstagramSlides />
      <Footer />
      
    </>
  );
}

export default App;


