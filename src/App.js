import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/shared/NavBar";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import WhyMaze from "./pages/WhyMaze";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
