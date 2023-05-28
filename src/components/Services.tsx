import React from "react";

export default function Services() {
  const services = [
    {
      serviceName: "Men's HairCut",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942035/yakirmaman/hair-tools.svg",
      serviceDescription:
        "Men's Haircut involves cutting and styling a man's hair to achieve a desired look or shape",
    },
    {
      serviceName: "Beard Trim",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942467/yakirmaman/beard.svg",
      serviceDescription:
        "shaping and grooming a man's facial hair, to maintain a neat and well-maintained appearance",
    },
    {
      serviceName: "Treatment",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-service.svg",
      serviceDescription:
      "improve hair health and appearance with specialized procedures like conditioning, masks, and customized solutions for specific concerns"    },
    {
      serviceName: "Wash",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-wash.svg",
      serviceDescription:
        " cleansing the hair and scalp using shampoo and water to remove dirt, oils, and impurities, leaving the hair refreshed and ready for further styling or treatments",
    },
  ];
  return (
    <section
      className="services-section flex column align-center justify-center"
      id="Service"
    >
      <h3>OUR SERVICES</h3>
      <h1>
        Our Barber <span>Services</span>
      </h1>
      <div className="service-continaer flex row">
        {services.map((service) => {
          return (
            <div
              className="service-card flex column justify-center align-center"
              key={service.serviceName}
            >
              <img src={service.serviceImg} alt="service-img" />
              <h2>{service.serviceName} </h2>
              <span>{service.serviceDescription} </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
