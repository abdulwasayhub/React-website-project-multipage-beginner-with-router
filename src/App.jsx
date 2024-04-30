import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import NewsLetter from "./components/NewsLetter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/about" element={<Experts />} />
        <Route path="/subscribe" element={<NewsLetter />} />
        <Route path="/courses" element={<Plans />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
