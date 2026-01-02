import React from "react";
import "../Layout/Layout.css";
import Header from "../Header/Header.jsx";
import About from "../About/About.jsx";
import Strength from "../Strength/Strength.jsx";
import Education from "../Education/Education.jsx";
import Skills from "../Skills/Skills.jsx";
import Project from "../Project/Project.jsx";
import Certificate from "../Certificate/Certificate.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <main className="section layout">
      <div className="container">
        <div className="layoutGrid">
          <Header></Header>
          <About></About>
          <Strength></Strength>
          <Education></Education>
          <Skills></Skills>
          <Project></Project>
          <Certificate></Certificate>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Layout;
