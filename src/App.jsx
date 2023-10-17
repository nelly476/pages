import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./assets/components/Header";
import HomePage from "./assets/components/HomePage";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
