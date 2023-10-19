import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Works from "./components/Works";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/works" element={<Works />}></Route>
      </Routes>
    </div>
  );
}

export default App;
