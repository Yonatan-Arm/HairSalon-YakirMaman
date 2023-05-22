import React, { useState } from "react";
import yakirSrc from "../assets/imgs/yakir.jpg";
import playSrc from "../assets/imgs/play-button.svg";
import Video from "./Video";
export default function Hero({ OpenModalOrder }:any) {
  const [closeVideo, setCloseVideo] = useState(false);

  return (
    <section className="hero-section flex row ">
      <div className="profile-img flex align-center justify-center">
        <img src={yakirSrc} alt="yakir-maman" className="image" />
      </div>
      <div className="text-section flex column one">
        <h1>Yakir Maman</h1>
        <span>Hair Style Fashion</span>
     
        <div className="btn-continer flex row justify-center">
          <button
                  onClick={() => {
                    OpenModalOrder();
                   
                  }}
                >Get started</button>
          <button
            className="flex align-center"
            onClick={() => setCloseVideo(true)}
          >
            <img src={playSrc} alt="playSrc" />
            Watch video
          </button>
        </div>
      </div>

      {closeVideo && <Video closeVideo={() => setCloseVideo(false)} />}
    </section>
  );
}
