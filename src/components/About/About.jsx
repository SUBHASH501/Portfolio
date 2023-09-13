import React from "react";
import Header from "../Header/Header";
import "./About.css";
import aboutVector from "./../../assets/about_vector.png";
import Footer from "../Footer/Footer";
import aboutAnime from "./../../assets/about_anime.gif";

function About() {
  return (
    <div className="section-container">
      <Header
        heading="About Me"
        details="A Software Developer || A Programmer || A MERN Stack developer "
      />

      <div className="about-main">
      <div className="about-main-left">
        {/*Sub section 1*/}
        <h3 className="about-sub-head">Hello ! My name is Subhash Kumar.</h3>
        <p className="about-details">
         A software developer with a passion for building efficient and scalable applications. I am working in Western Digitl as an SSD Firmware verification engineering.
        
        I have a solid foundation in firmware verification engineering, thanks to my one-year internship at Western Digital (SanDisk). During this time, I gained valuable experience in ensuring the quality and reliability of firmware through rigorous testing and verification processes. This role allowed me to sharpen my problem-solving skills and attention to detail, crucial qualities for any developer.
        
        I hold a Bachelor's degree in Computer Science Engineering from Lovely Professional University. Throughout my academic journey, I acquired a comprehensive understanding of various computer science concepts and honed my programming skills. My education has provided me with a strong technical background that enables me to approach complex challenges with confidence and creativity.
        
        In addition to my technical expertise, I possess excellent teamwork and communication skills. I enjoy collaborating with cross-functional teams, as I believe collective efforts lead to the most innovative solutions. 
        </p>
      </div>

      <div className="about-main-right">
        <img
          className="about-anime-right"
          src={aboutAnime}
          alt="Animation"
          srcset=""
        />
      </div>
    </div>

      <Footer
        phrase="Check out my"
        link="Projects"
        toaddress="/projects"
      ></Footer>
      <div className="vector-frame">
        <img
          src={aboutVector}
          className="about-vector"
          alt="About background"
        />
      </div>
    </div>
  );
}

export default About;
