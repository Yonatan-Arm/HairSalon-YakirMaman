import React from "react";

export default function About() {
  return (
    <section className="about-section">
      <h1>About Us</h1>
      <h3>
        <i>The Hair Style Salon Since 2015 </i>
      </h3>
      <div className="main-continer flex row">
        <div className="image-continer"></div>
        <div className="text-continer flex column">
          <span>ברוכים הבאים למספרה של יקיר ממן</span>
          <p className="about-text flex column">
            <span> המספרה שלנו ממוקמת ברחוב משה אבן עזרא 23 בעיר אשדוד</span>
            והיא מקום מושלם לגברים ונשים המחפשים תספורות מעוצבות ואיכותיות. עם
            צוות מקצועי מיומן ומנוסה, אנחנו מבטיחים לכם חוויה ייחודית של טיפוח
            אישי. במספרה שלנו, אנחנו מתמחים בתספורות לגברים ונשים, כולל גזירות
            מודרניות קלאסיות ומגוון סגנונות אחרים שיתאימו לטעמכם האישי. אנחנו
            מקפידים על איכות גבוהה של כל תספורת ומסייעים לכם למצוא את המראה
            המושלם שישדרג את המראה שלכם ויחדיר את הביטוי האישי שלכם. האווירה
            במספרה שלנו היא נעימה וידידותית, ואנחנו מקפידים ליצור חוויה מותאמת
            אישית לכל לקוח אנו מאמינים שכל אדם יכול להרגיש טוב ולהיראות מדהים
            בעזרת תספורת מושקעת ומטופחת.
            <span> אנא צרו קשר כדי לקבוע תור או לקבל מידע</span>
            <span>
              {" "}
              נוסף. אנחנו מחכים לשמוע מכם ולתת לכם את המראה המושלם שתמיד חלמתם
              עליו
            </span>
          </p>

          <div className="details flex row align-center justify-center">
            <div className="flex column">
              <span>8</span>
              <span>שנים של ניסיון</span>
            </div>
            <div className="flex column">
              <span>1</span>
              <span>מומחה לשיער</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
