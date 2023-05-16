import React from "react";

export default function Services() {
  const services = [
    {
      serviceName: "Men's HairCut",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942035/yakirmaman/hair-tools.svg",
      serviceDescription:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae ",
    },
    {
      serviceName: "Beard Trim",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942467/yakirmaman/beard.svg",
      serviceDescription: "libero nam molestiae in enim quo unde",
    },
    {
      serviceName: "Treatment",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-service.svg",
      serviceDescription: " numquam! Iusto officiis atque excepturi laboriosam",
    },
    {
      serviceName: "Wash",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-wash.svg",
      serviceDescription:
        " nam perferendis consequuntur? Aliquid reprehenderit obcaecati",
    },
  ];
  return (
    <section className="services-section flex column align-center justify-center">
      <h3>OUR SERVICES</h3>
      <h1>
        Our Barber <span>Services</span>
      </h1>
      <div className="service-continaer flex row">
        {services.map((service) => {
          return <div className="service-card flex column justify-center align-center" key={service.serviceName}>
            <img src={service.serviceImg} alt="service-img" />
            <h2>{service.serviceName} </h2>
            <span>{service.serviceDescription} </span>
          </div>;
        })}
      </div>
    </section>
  );
}
