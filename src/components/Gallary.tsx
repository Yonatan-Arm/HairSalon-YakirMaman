import React from "react";
import videsSrc from '../assets/imgs/yakir-video-haircut.mp4'
export default function Gallary() {
  return (
    <section className="gallary-section flex column align-center justify-center">
      <video autoPlay muted playsInline loop id="myVideo">
  <source src={videsSrc} type="video/mp4" />
</video>
      <h1>Our Gallary </h1>
      <h2>
        <i> Enjoy Our Awesome Snapshot </i>
      </h2>
      <div className="gallary-contianer flex wrap align-center justify-center slider">
        <div className="slide-track">
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/1.jpg"
              alt="1"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/2.jpg"
              alt="2"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg"
              alt="3"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg"
              alt="4"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/5.jpg"
              alt="5"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/2.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/1.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/5.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg"
              alt="6"
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg"
              alt="6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
