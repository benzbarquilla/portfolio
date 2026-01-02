import React from "react";
import profilePic2 from "../../assets/profilePic2.jpg";
import "../Header/Header.css";

const Header = () => {
  return (
    <header className="section header">
      <div className="headerGrid">
        {/* Left Side */}
        <div className="profileImg">
          <img src={profilePic2} alt="Profile" />
        </div>
        {/* Right Side */}
        <div class="card">
          {/* Info */}
          <div class="card-body">
            <h5 class="card-title">Benz D. Barquilla</h5>
            <p class="card-text">
              {" "}
              <i class="fa-solid fa-map-pin"></i>San Jose, Malaybalay City
            </p>
            <p className="course">
              BSIT 4th Year Student | IT Intern Applicant
            </p>
            {/* Buttons */}
            <div className="buttons">
              {/* <button className="btn btn-dark">
                <i className="fa-solid fa-download"></i> Download Resume
              </button> */}
              <a
                href="mailto:2201105801@student.buksu.edu.ph"
                className="btn btn-dark"
              >
                <i className="fa-regular fa-envelope"></i> Email
              </a>
              <a
                href="https://github.com/benzbarquilla"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-brands fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
