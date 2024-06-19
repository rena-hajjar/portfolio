"use client";
import React from "react";
import Main from "../Main";
import NavBar from "@/app/components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <>
    <Router>
        <NavBar />
        <Main></Main>
    </Router>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/projects"></Route>
            <Route path="/coursework"></Route>
            <Route path="/my-arts"></Route>
          </Routes>
        </Router> */}
    </>
    //Main(hero), about (the website)
    //link to resume (and to see more (portfolio link)), linkedin, email
    //footer

    //portfolio in depth
  );
}
