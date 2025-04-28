
import React from "react";
import Layout from "./layout";
import { Routes, Route } from "react-router-dom";
import SkinDetail from "./pages/SkinDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skins/:id" element={<SkinDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}
