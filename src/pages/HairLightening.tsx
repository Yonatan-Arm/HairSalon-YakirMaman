import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
export default function HairLightening() {
    const slides = [

        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/6.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/3.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1681123353/yakirmaman/8.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening1.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening2.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening3.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening4.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening5.jpg",
        "https://res.cloudinary.com/yonatan-cajan22/image/upload/v1687953025/yakirmaman/lightening6.jpg",

    ];
    return (
        <section className="lightening-section text-center">
                  <a href="tel:+972534234428" className="phone-icon"></a>
            <h1>הבהרות לשיער</h1>
            <div className="content flex column align-center justify-center ">
                <span>מספרת יקיר ממן מציגה </span>
                <span>!סרטון כימיה מדויק לצד האווירה המושלמת שלנו </span>
                <span> .שמבטיח את בריאות שיערך  OLAPLEX  ההבהרה הטובה ביותר כמובן עם התוסף BLONDE ME התחלנו בסריגה הייחודית שלנו השתמשנו ב </span>
                <p>לבסוף נתנו גוון מושלם בעזרת השטיפות של שוורצקוף, והתוצאה מושלמת, בלונד רך וזוהר עם ניתוק עדין מהשורש
                    אצלנו במספרה משתמשים בחומרים האיכותיים ביותר
                </p>
                <span>
                    התחלנו בסריגה של גוונים דקים וצפוצים
                </span>
                <span> OLAPLEX N.O2 לאחר חפיפה וטיפול של   </span>
                <span>החדרנו פיגמנטים ונתנו גוון עזרת השטיפות של שוורצקוף  </span>
                <span>!התוצאה מושלמת בלונד רך וזוהר עם ניתוק עדין מהשורש . כול זאת עם האווירה המיוחדת שיש רק אצלנו. המקצועיות שלנו והסיפוק שלך תמיד במקום הראשון</span>
            </div>
            <div className="lightening-carousel">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter:true
              }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="swiper-wrapper">
                    {slides.map((slide) => (
                        <SwiperSlide
                            key={slide}
                            style={{
                                backgroundImage: `url(${slide})`,
                            }}
                            
                        />
                    ))}
                </div>
                <div className="swiper-pagination"></div>
            </Swiper>
            </div>

        </section>
    );
}
