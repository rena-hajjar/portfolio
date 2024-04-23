import React from "react";
import Hero from "../../components/hero";
import './about.css'
import Image from "next/image";
import crest from './../../data/crest.png';
import perk from './../../data/perk.png';
import readwise from './../../data/readwise.png';
import ontario from './../../data/ontario.jpeg';
import { Link } from "react-router-dom";
import ResumeButton from "@/app/components/ResumeButton";

export default function About() {
    return (
      <>
        <div className="intro-about">
          <div className="intro-title">
            <p className="intro-paragraph">Hi, my name is</p>
            <p className="intro-name">Réna Sophia Hajjar</p>
          </div>
          <Hero></Hero>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          >
            <ResumeButton />
          </div>
          <section className="main">
            <p className="title">About Me</p>
            <div className="main-about">
              <div className="about-item">
                <Link
                  to="/coursework"
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <div className="about-image-box">
                    <Image
                      alt={"Queen's University Crest"}
                      src={crest}
                      width={150}
                    ></Image>
                  </div>
                  <div className="about-item-description">
                    <p className="about-item-description-title">
                      Queen's University Computing With Honours, Specialization
                      in Biomedical Computing
                    </p>
                    <p className="about-item-description-about">
                      2022-2023 and 2023-2024 Dean's List <br />
                      3.74/4.00 GPA <br />
                      Club Involvement: Queen's Women in Computing Web
                      Developer, Smith Business and Technology Logistics
                      Director
                    </p>
                  </div>
                </Link>
              </div>
              <div className="about-item">
                <Link
                  to="/work"
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <div className="about-item-description">
                    <div className="about-item-description-title">
                      Undergraduate Student Researcher for the Lab for
                      Percutaneous Surgery
                    </div>
                    <div className="about-item-description-about">
                      Working on central line tutor blah blah blah
                    </div>
                  </div>
                  <div className="about-image-box">
                    <Image
                      alt={"Lab for Percutaneous Surgery Logo"}
                      src={perk}
                      width={150}
                      style={{ borderRadius: "50%" }}
                    ></Image>
                  </div>
                </Link>
              </div>
              <div className="about-item">
                <Link
                  to="/work"
                  style={{ textDecoration: "none", display: "flex" }}
                >
                  <div className="about-image-box">
                    <Image
                      src={ontario}
                      alt="Service Ontario Logo"
                      width={150}
                      style={{ borderRadius: "40%" }}
                    ></Image>
                  </div>
                  <div className="about-item-description">
                    <div className="about-item-description-title">
                      Incoming IT&T Tech Specialist with Government Services
                      Integration Cluster
                    </div>
                    <div className="about-item-description-about">
                      may 2024-september 2024
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <p className="title">Previous Experience</p>
            <div className="about-item">
              <Link
                to="/coursework"
                style={{ textDecoration: "none", display: "flex" }}
              >
                <div className="about-image-box">
                  <Image
                    alt={"Readwise Logo"}
                    src={readwise}
                    width={150}
                  ></Image>
                </div>
                <div className="about-item-description">
                  <p className="about-item-description-title">
                    Software Engineer Intern at Readwise, May 2023 - September
                    2023
                  </p>
                  <p className="about-item-description-about">
                    BLAH BLAH BLAH SOFTWARE AND WHATNOT
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </>
    );
}