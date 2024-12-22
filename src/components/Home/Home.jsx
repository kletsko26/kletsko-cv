import React from "react";
import me from "../../assets/me.jpg";
import qr from "../../assets/qr.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
      <img src={me} className="home__img" alt="" />
        <div className="home__data bd-grid">
          <h1 className="home__title">
            Kletsko <b> Luba</b>
          </h1>
          <h3 className="home__profession"> Front-end Developer</h3>
          <img src={qr} className="qr" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
