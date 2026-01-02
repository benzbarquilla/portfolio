import React from "react";
import "../Certificate/Certificate.css";
import ccnaBadge1 from "../../assets/ccnaBadge.png";
import ccnaBadge2 from "../../assets/ccnaBadge2.png";
import cybersectBadge from "../../assets/cybersectBadge.png";

const Certificate = () => {
  return (
    <section className="section certificate">
      <div class="certificateCard">
        <div class="certificateBody">
          <h5 class="certificateHeader">
            <i class="fa-solid fa-certificate"></i> Cisco Badges
          </h5>

          <div className="certificateItems">
            <span class="badge text-bg-light">
              <img src={ccnaBadge2} alt="" />
              Introduction to Networks
            </span>
          </div>
          <div className="certificateItems">
            <span class="badge text-bg-light">
              <img src={ccnaBadge1} alt="" />
              CCNA: Switching, Routing, and Wireless Essentials
            </span>
          </div>
          <div className="certificateItems">
            <span class="badge text-bg-light">
              <img src={cybersectBadge} alt="" />
              Introduction to Cybersecurity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
