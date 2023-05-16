import React from "react";
// https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg
// https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg
// https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/5.jpg
// https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6S.jpg

export default function Gallary() {
  return (
    <section className="gallary-section flex column align-center justify-center">
      <h1>Our Gallary </h1>
      <h2><i> Enjoy Our Awesome Snapshot </i></h2>
      <div className="gallary-contianer flex wrap align-center justify-center">
        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/1.jpg"
          alt="1"
        />

        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/2.jpg"
          alt="2"
        />

        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg"
          alt="3"
        />

        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/4.jpg"
          alt="4"
        />

        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/5.jpg"
          alt="5"
        />

        <img
          src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg"
          alt="6"
        />
      </div>
    </section>
  );
}
