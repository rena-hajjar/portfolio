"use client";
import React from "react";
import About from "../about";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Studies from "../studies";

export default function Home() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/work" element={<Studies />}></Route>
          <Route path="/projects"></Route>
          <Route path="/coursework"></Route>
          <Route path="/my-arts"></Route>
        </Routes>
        <Footer />
      </Router>
    </>
    //Main(hero), about (the website)
    //link to resume (and to see more (portfolio link)), linkedin, email
    //footer

    //portfolio in depth
  );
}
