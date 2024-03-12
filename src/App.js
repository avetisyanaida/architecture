import "./App.css";
import Header from "./components/Header/Header";
import Developer from "./components/Developer/Developer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Section from "./components/Section/Section";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Section />} />
          <Route path="/developer" element={<Developer />} />
        </Route>
      </Routes>
  );  
}

export default App;
