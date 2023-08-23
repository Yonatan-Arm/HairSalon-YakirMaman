import React from "react";

export default function Services() {
  const services = [
    {
      serviceName: "צביעת שיער וגוונים",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-wash.svg",
      serviceDescription:
        "    חווית צבעים וגוונים מרהיבה לשיערך, באמצעות פלטת צבעים רחבה. תשתמשי בקטלוגים להשראה, ונסייע לך למצוא את הגוון המושלם. אנו משתמשים בחומרים איכותיים מהמותגים המובילים בתחום, מתאימים לחיזוק ושמירה על השיער לאורך זמן",
    },
    {
      serviceName: "החלקת שיער",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942652/yakirmaman/hair-service.svg",
      serviceDescription:
        "החלקת שיער במספרת שלנו היא ההזדמנות ליהנות מהחדשנות הגורמת לך להרגיש מחודשת ומעוצבת. מומחים מקצועיים ייוועצו לך ויבצעו את החלקה לפי טעמך וסגנונך, מאפשרים לך לחוות תוצאה מושלמת      ",
    },
    {
      serviceName: "עיצוב שיער",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680942035/yakirmaman/hair-tools.svg",
      serviceDescription:
        "במספרת יקיר ממן אנו מציעים עיצוב שיער מודרני ומדויק המתאים לסגנון האישי שלך. צוות המומחים שלנו ישמח לייעוץ ולייצור לך את המראה המושלם באמצעות טכניקות מתקדמות וחיתוך מדויק",
    },
    {
      serviceName: "תספורות נשים",
      serviceImg:
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1680943543/yakirmaman/woman-haircut.svg",
      serviceDescription:
        "  השירותים המגוונים שאנו מציעים כוללים מגוון רחב של צבעים וגוונים לשיער, החלקות יפניות וחימר, הבהרות, טיפולים מתקדמים ואפשרויות נוספות   ",
    },
  ];
  return (
    <section
      className="services-section flex column align-center justify-center"
      id="Service"
    >
      <h1>שירותי המספרה </h1>
      <div className="service-continaer flex row">
        {services.map((service) => {
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
