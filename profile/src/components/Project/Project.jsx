import React from "react";
import "../Project/Project.css";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";

const Project = () => {
  return (
    <section className="section project">
      <div className="projectGrid">
        <h5 class="projectHeader">
          <i class="fa-solid fa-diagram-project"></i> Projects
        </h5>
        <div class="projectCard">
          <div class="projectBody">
            <img src={slide1} class="card-img-top" alt="..." />
            <div>
              <h2 className="projectTitle1">
                Gym Equipment Borrowing and Management System
              </h2>
              <p className="projectDesc1">
                One of our academic projects developed using the MERN stack, a
                web-based application designed to efficiently track gym
                equipment inventory and manage the borrowing and return process.
              </p>
            </div>
          </div>
          <div class="projectBody">
            <img src={slide2} class="card-img-top" alt="..." />
            <div>
              <h2 className="projectTitle2">EcoSentry</h2>
              <p className="projectDesc2">
                Our capstone project which is an IoT-based chainsaw sound
                detection system for environmental monitoring (Raspberry Pi,
                Machine Learning, LoRa, Web Monitoring Dashboard).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
