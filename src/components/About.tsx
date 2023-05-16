import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <h1>About Us</h1>
      <h3>
        <i>The Hair Style Salon Since 2015 </i>
      </h3>
      <div className="main-continer flex row">
        <div className="image-continer">
          <img
            src="https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681118259/yakirmaman/shop.jpg"
            alt="shop"
          />
        </div>
        <div className="text-continer flex column">
          <span>We Will Change Your Out Looks!</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur ipsa ducimus quas. Eligendi odit tempora consequatur
            fuga doloremque architecto, libero saepe officiis nobis minima
            aspernatur doloribus fugiat earum laboriosam dolorum. Ducimus
            blanditiis voluptate praesentium eum? Alias, perferendis eius. Quo
            veritatis laboriosam placeat dicta quas dolorum totam aperiam
            voluptates, repudiandae aliquam unde nobis culpa blanditiis eligendi
            sint quod. Vel, aliquam enim!
          </p>
          <div className="details flex row align-center justify-center">
            <div className="flex column">
                <span>8</span>
                <span>Years Of Expirence</span>
            </div>
            <div className="flex column">
                <span>1</span>
                <span>Awesome Expert</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}
