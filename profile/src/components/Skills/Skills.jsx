import React from "react";
import "../Skills/Skills.css";
import cssIcon from "../../assets/icons/css.png";
import htmlIcon from "../../assets/icons/html.png";
import jsIcon from "../../assets/icons/js.png";
import mongoIcon from "../../assets/icons/mongo.png";
import reactIcon from "../../assets/icons/react.png";
import nodeIcon from "../../assets/icons/node.png";
import figmaIcon from "../../assets/icons/figma.png";
import gitIcon from "../../assets/icons/git.png";
import githubIcon from "../../assets/icons/github.png";
import vscodeIcon from "../../assets/icons/vscode.png";
import ciscoIcon from "../../assets/icons/cisco.png";
const Skills = () => {
  return (
    <section className="section skill">
      <div className="skillsGrid">
        <div class="skillCard">
          <div class="skillBody">
            <h5 class="skillHeading">
              <i class="fa-solid fa-lines-leaning"></i>Technical Skills & IT
              Foundations
            </h5>
            <div className="badgeItems">
              <span class="badge text-bg-light">
                <img src={htmlIcon} alt="" />
                HTML (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={cssIcon} alt="" />
                CSS (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={jsIcon} alt="" />
                Javascript (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={mongoIcon} alt="" />
                MongoDB (Basic)
              </span>{" "}
              <span class="badge text-bg-light">
                Express (Basic)
                <img src={jsIcon} alt="" />
              </span>
              <span class="badge text-bg-light">
                <img src={reactIcon} alt="" />
                React (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={nodeIcon} className="nodeIcon" alt="" />
                Node (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={gitIcon} alt="" />
                <img src={githubIcon} alt="" />
                Git & Github(Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={vscodeIcon} alt="" />
                VS Code
              </span>
              <span class="badge text-bg-light">
                <img src={figmaIcon} alt="" />
                Figma (Basic)
              </span>
              <span class="badge text-bg-light">
                <img src={ciscoIcon} alt="" />
                Basic Networking Concepts
              </span>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Skills;
