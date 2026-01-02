import React from "react";
import "../Strength/Strength.css";

const Strength = () => {
  return (
    <section className="section strength">
      <div class="strengthCard">
        <div class="strengthBody">
          <h5 className="strengthHeader">
            <i class="fa-solid fa-circle-check"></i>Strengths
          </h5>
          <ul class="list-group">
            <li class="list-group-item">Willing to learn</li>
            <li class="list-group-item">Team Oriented</li>
            <li class="list-group-item">Adaptable to new technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Strength;
