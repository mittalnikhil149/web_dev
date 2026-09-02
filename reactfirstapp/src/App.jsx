import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/headers/header";
import Registration3 from "./components/Registration3";
import Body from "./components/Body/body";
import Counter from "./components/counter";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Registration3 />} />
        <Route path="/student" element={<Body />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;