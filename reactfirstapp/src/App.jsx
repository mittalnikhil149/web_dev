import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/headers/header";
import Registration3 from "./components/Registration3";
import Body from "./components/Body/body";
// import Counter from "./components/counter";
const counter=React,lazy=({})
import Product from "./components/prodeuct.jsx";
import Courses from "./components/courses.jsx";
import Offline from "./components/Offline.jsx";
import Online from "./components/Online.jsx";
import Contact from "./components/contact.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Registration3 />} />
        <Route path="/student" element={<Body />} />
        <Route path="/counter" element={<Suspense fallback={<spinner/>}>
        <counter/></Suspense>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />}>
          <Route index element={<Offline />} />
          <Route path="offline" element={<Offline />} />
          <Route path="online" element={<Online />} />
        </Route>
        <Route path="/product/:pid" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;