import React from "react";
// import { educationData } from "../cv";
import Title from "./Shared/Title";
const Education = () => {
  return (
    <section className="education section" id="education">
      <Title title="Education"></Title>
      <div className="education__container bd-grid">
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder" />
            <span className="education__line"></span>
          </div>
          <div className="education__data bd-grid">
            <h3 className="education-title">Gymnasium No. 1, Zhodino</h3>

            <div className="education__year">2012-2023</div>
          </div>
        </div>
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder" />
          </div>
          <div className="education__data bd-grid">
            <h3 className="education-title">
              Faculty of Mechanics and Mathematics of BSU
            </h3>
            <span className="education__studies"> BSU, Minsk, BY </span>
            <div className="education__year">2023-2028</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
