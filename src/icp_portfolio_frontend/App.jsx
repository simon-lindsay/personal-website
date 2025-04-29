import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div id="top"></div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
