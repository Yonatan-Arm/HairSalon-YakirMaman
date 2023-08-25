import React from "react";

export default function About({ OpenModalOrder }: OpenModalProps) {
  return (
    <section className="about-section" id="about">
      <h1>אודות המספרה</h1>
      <h3>
        <i>מתמחים בעיצוב שיער מ2015 </i>
      </h3>
      <div className="main-continer flex row">
        {/* <div className="image-continer"></div> */}
        <div className="text-continer flex column">
          <h2>ברוכים הבאים למספרה של יקיר ממן</h2>
          <p className="about-text flex column">
            <span> המספרה שלנו ממוקמת ברחוב משה אבן עזרא 23 בעיר אשדוד</span>
            והיא מקום מושלם לגברים ונשים המחפשים תספורות מעוצבות ואיכותיות. עם
            צוות מקצועי מיומן ומנוסה, אנחנו מבטיחים לכם חוויה ייחודית של טיפוח
            אישי. במספרה שלנו, אנחנו מתמחים בתספורות לגברים ונשים, כולל גזירות
            מודרניות קלאסיות ומגוון סגנונות אחרים שיתאימו לטעמכם האישי. אנחנו
            מקפידים על איכות גבוהה של כל תספורת ומסייעים לכם למצוא את המראה
            המושלם שישדרג את המראה שלכם. האווירה במספרה שלנו היא נעימה
            וידידותית, ואנחנו מקפידים ליצור חוויה מותאמת אישית לכל לקוח אנו
            מאמינים שכל אדם יכול להרגיש טוב ולהראות מדהים בעזרת תספורת מושקעת
            ומטופחת.
            <span> אנא צרו קשר כדי לקבוע תור או לקבל מידע</span>
            <span>
              {" "}
              נוסף. אנחנו מחכים לשמוע מכם ולתת לכם את המראה המושלם שתמיד חלמתם
              עליו
            </span>
          </p>

          <div className="details flex row align-center justify-center">
            <span>מעצב שיער בעל ותק של מעל 10 שנים</span>
          </div>
          <div className="cta-btn">
            <button
              onClick={() => {
                OpenModalOrder();
              }}
            >
              זימון תור למספרה
            </button>
          </div>
          <div className="times flex column align-center justify-center">
            <span>:שעות הפעילות של המספרה</span>
            <span> א'-ה': 10:00-18:00</span>
            <span> ו': 14:00- 9:00</span>
          </div>
          <div className="phone-details flex column align-center justify-center">
            <span>:לפרטים נוספים, יקיר ממן </span>
            <a href="tel:+972534234428" className="phone-span">053-4234428
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}
