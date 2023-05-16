import React, { useState } from "react";
import yakirSrc from "../assets/imgs/yakir.jpg";
import playSrc from "../assets/imgs/play-button.svg";
import Video from "./Video";
export default function Hero() {
  const [closeVideo, setCloseVideo] = useState(false);

  return (
    <section className="hero-section flex row ">
      <div className="text-section flex column">
        <span>We are looking to make you <span className="span-color">handsome</span> </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          cumque facere molestiae provident explicabo
        </p>
        <div className="btn-continer flex row justify-center">
          <button>Get started</button>
          <button className="flex align-center"  onClick={()=>setCloseVideo(true)}>
            <img src={playSrc} alt="playSrc"/>
            Watch video</button>
        </div>
      </div>
      <div className="profile-img flex align-center justify-center">
        <img src={yakirSrc} alt="yakir-maman" className="image" />
      </div>
      {closeVideo && (
      <Video closeVideo={() => setCloseVideo(false)} />
      )}
    </section>
  );
}
