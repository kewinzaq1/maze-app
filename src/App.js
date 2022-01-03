import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import WhyMaze from "./pages/WhyMaze";
import Comunity from "./pages/Comunity";
import Pricing from "./pages/Pricing";
import Enterprise from "./pages/Enterprise";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Sign />} />
        <Route path='/why-maze' element={<WhyMaze />} />
        <Route path='/comunity' element={<Comunity />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/enterprise' element={<Enterprise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
