import React, { useState } from "react";
import yakirSrc from "../assets/imgs/logo.jpg";
import playSrc from "../assets/imgs/play-button.svg";
import Video from "./Video";
export default function Hero({ OpenModalOrder }: any) {
  const [closeVideo, setCloseVideo] = useState(false);

  return (
    <section className="hero-section flex row " id="Home">
      <div className="profile-img flex align-center justify-center">
        <img src={yakirSrc} alt="yakir-maman" className="image"  loading='lazy'/>
      </div>
      <div className="text-section flex column one">
        <h1>Yakir Maman</h1>
        <span>Hair Style Fashion</span>
        <div className="flex column justify-center align-center btns-continaer">

          <div className="btn-continer flex row justify-center">
            <button
              onClick={() => {
                OpenModalOrder();

              }}
            >זימון תור למספרה</button>
            <button
              className="flex align-center"
              onClick={() => setCloseVideo(true)}
            >
              <img src={playSrc} alt="playSrc" />
              Watch video
            </button>
          </div>
          <a href="tel:+972534234428" className="phone-btn" >053-4234428
          </a>

        </div>
      </div>

      {closeVideo && <Video closeVideo={() => setCloseVideo(false)} />}
    </section>
  );
}
