import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import History from "./Components/History";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Navbar />
              <Header />
              <History />
              <Contact />
              <div className="bg-[#E2E8F0] h-[8vh] flex items-center justify-center text-center">
                © انجمن علمی علوم کامپیوتر دانشگاه شهید باهنر کرمان
              </div>
            </>
          }
          index
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
