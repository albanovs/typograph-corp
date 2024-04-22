import React from "react";
import HomePage from "./pages/home-page";
import { Routes, Route } from "react-router-dom";
import Calculate from "./pages/calculate";
import Header from "./components/header";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
import Coontact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Coontact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
