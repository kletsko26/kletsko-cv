import React from "react";
import Title from "../Shared/Title";

const Social = () => {
  return (
    <section className="social section">
      <Title title="Socials"></Title>
      <div className="social__container">
        <div className="social__flex_box_container">
          <a href="tel:88005553535" className="social_phone_number">
            +375 29 637-12-62
          </a>
          <a href="mailto:kletsko@email.com" className="social_phone_number">
            kletsko@email.com
          </a>
          <a href="https://t.me/123123" className="social__link">
            <i className="social__icon bx bxl-telegram" />
            Telegram
          </a>
          <a href="https://github.com/kletsko26" className="social__link">
            <i className="social__icon bx bxl-github" />
            Github
          </a>
          <a href="https://www.linkedin.com/" className="social__link">
            <i className="social__icon bx bxl-linkedin" />
            LnkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Social;
