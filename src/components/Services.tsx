import React, { useState, useEffect } from "react";
import services from '../services';


export default function Services() {
  const [servicesToDisplay, setservicesToDisplay] = useState<service[]>([]);
  useEffect(() => {
    setservicesToDisplay(services)
  }, []);
  return (
    <section
      className="services-section flex column align-center justify-center"
      id="Service"
    >
      <h1>שירותי המספרה </h1>
      <div className="service-continaer flex row">
        {servicesToDisplay.map((service:service) => {
          return (
            <div
              className="service-card flex column justify-center align-center"
              key={service.serviceName}
            >
              <img src={service.serviceImg} alt="service-img" loading="lazy" />
              <h2>{service.serviceName} </h2>
              <span>{service.serviceDescription} </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
