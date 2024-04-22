import React from "react";
import HomePage from "./pages/home-page";
import { Routes, Route } from "react-router-dom";
import Calculate from "./pages/calculate";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculate" element={<Calculate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
