'use client'
import React from "react";
import Hero from "../hero";
import NavBar from "../navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
    return (
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/'></Route>
            <Route path='/work'></Route>
            <Route path='/projects'></Route>
            <Route path='/coursework'></Route>
            <Route path='/my-arts'></Route>
          </Routes>
        </Router>
        <Hero />
      </>
      //Main(hero), about (the website)
      //link to resume (and to see more (portfolio link)), linkedin, email
      //footer

      //portfolio in depth
    );
}